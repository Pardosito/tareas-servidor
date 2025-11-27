import { Request, Response } from "express";
import { mailer } from "./model";
import { Options } from "nodemailer/lib/mailer";

export function sendEmail(req: Request, res: Response) {
  const email = req.query.email as string;
  const content = req.query.content as string;

  console.log(email);
  console.log(content);

  const mailOptions: Options = {
    from: "ianrdzwong@gmail.com",
    to: email,
    subject: "Queridísimo Santa:",
    html: `<p>Solicitud de: ${email}</p><p>${content}</p>`,
    text: content
  };

  mailer
    .sendMail(mailOptions)
    .then(() => {
      res.send("Correo envidado");
    })
    .catch((e) => {
      console.log(e)
      res.send("Te faltó especificar la cuenta destino");
    });
}
