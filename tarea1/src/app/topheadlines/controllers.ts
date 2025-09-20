import { Request, Response } from "express";
import { news } from "../..";

export function getHeadlineByCountry(req : Request, res : Response) {
    const country = req.query.country as string;
    
    news.get(`/top-headlines?country=${country}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}

export function getHeadlineByCategory(req : Request, res : Response) {
    const category = req.query.category as string;

    news.get(`/top-headlines?category=${category}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}

export function getHeadlineBySource(req : Request, res : Response) {
    const source = req.query.source as string;

    news.get(`/top-headlines?sources=${source}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}

export function getHeadlineByQuery(req : Request, res : Response) {
    const topic = req.query.topic as string;

    news.get(`/top-headlines?q=${topic}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}