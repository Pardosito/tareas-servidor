import { Request, Response } from "express";
import { news } from "../..";

export function getAllSources(req : Request, res : Response) {
    news.get(`/top-headlines/sources`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}

export function getSourcesByCategory(req : Request, res : Response) {
    const category = req.query.category as string;

    news.get(`/top-headlines/sources?category=${category}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}

export function getSourcesByLanguage(req : Request, res : Response) {
    const language = req.query.language as string;

    news.get(`/top-headlines/sources?language=${language}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send({ message: error.message}));
}

export function getSourcesByCountry(req : Request, res : Response) {
    const country = req.query.country as string;

    news.get(`/top-headlines/sources?country=${country}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).send({ message: error.message}));
}