document.addEventListener("DOMContentLoaded", () => {
	const roomList = document.querySelector('.room-list');
	if (roomList) {
		roomList.addEventListener('click', (e) => {
			const button = e.target.closest('.room-button');
			const room = button.dataset.room;
			const username = sessionStorage.getItem('username');

			sessionStorage.setItem(`room:${room}:username`, username);
			window.location.href = `/chats/${encodeURIComponent(room)}`;
		});

		return;
	}

	const roomTitle = document.getElementById('roomTitle');
	if (roomTitle) {
		let room = null;
		let roomName = null;
		const container = document.querySelector('.chat-container');
		if (container && container.dataset) {
			if (container.dataset.room) room = container.dataset.room;
			if (container.dataset.roomName) roomName = container.dataset.roomName;
		}

		const username = sessionStorage.getItem(`room:${room}:username`) || sessionStorage.getItem('username');
		if (!username) {
			window.location.href = '/';
			return;
		}

		roomTitle.textContent = `Sala: ${roomName}`;
		const socket = io('/');
		socket.emit('joinRoom', { room, username });

		const form = document.getElementById('message-form');
		const input = document.getElementById('messageInput');
		const chatWindow = document.getElementById('chat-window');

		function formatTime(iso) {
			try {
				const d = new Date(iso);
				return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
			} catch (error) {
				return '';
			}
		}

		function appendMessage(data) {
			const isMine = data.username === username;
			const wrapper = document.createElement('div');
			wrapper.className = 'message' + (isMine ? ' mine' : ' other');

			const message = document.createElement('div');
			message.className = 'message-meta';

			const userSpan = document.createElement('span');
			userSpan.className = 'message-user';
			userSpan.textContent = data.username || 'Anon';

			const timeSpan = document.createElement('span');
			timeSpan.className = 'message-time';
			timeSpan.textContent = data.timestamp ? formatTime(data.timestamp) : '';
			message.appendChild(userSpan);
			message.appendChild(timeSpan);

			const text = document.createElement('div');
			text.className = 'message-text';
			text.textContent = data.message;

			wrapper.appendChild(message);
			wrapper.appendChild(text);
			chatWindow.appendChild(wrapper);
			chatWindow.scrollTop = chatWindow.scrollHeight;
		}

		function appendNotif(data) {
			const aviso = document.createElement('div');
			aviso.className = 'notification';
			aviso.textContent = data;
			chatWindow.appendChild(aviso);
			chatWindow.scrollTop = chatWindow.scrollHeight;
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const message = input.value.trim();
			if (!message) return;

			const timestamp = new Date().toISOString();
			socket.emit('messageSent', { room, message, username, timestamp });
			input.value = '';
		});

		socket.on('messageReceived', (data) => {
			appendMessage(data);
		});

		socket.on('userJoined', (data) => {
			appendNotif(`${data.username} se unió a la sala.`);
		});

		socket.on('userLeft', (data) => {
			appendNotif(`${data.username} salió de la sala.`);
		});

		const leaveButton = document.getElementById('leaveRoomButton');
		if (leaveButton) {
			leaveButton.addEventListener('click', () => {
				socket.emit('leaveRoom', { room, username });
				window.location.href = '/rooms';
			});
		}
	}
});