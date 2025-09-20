import { Request, Response } from "express";
import { news } from "../..";

export function getEverythingTopic(req : Request, res : Response) {
    const topic = req.query.topic as string;

    news.get(`/everything?q=${topic}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}))
}

export function getEverythingTopicSortBy(req : Request, res : Response) {
    const topic = req.query.topic as string;
    const sortby = req.query.sortby as string;

    news.get(`/everything?q=${topic}&sortBy=${sortby}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}))
}

export function getEverythingTopicFrom(req : Request, res : Response) {
    const topic = req.query.topic as string;
    const from = req.query.from as string;
    const to = req.query.to as string;
    
    news.get(`/everything?q=${topic}&from=${from}&to=${to}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}))
}
