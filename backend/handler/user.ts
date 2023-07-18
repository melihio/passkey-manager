import { Request, Response } from "express";
import { isNullOrEmpty } from "../utils/isNullOrEmpty";
import { RegisterDB } from "../db/user";
import { User } from "../models/user";

export async function Register(req: Request, res: Response) {
    if (!isNullOrEmpty(req.body.username, req.body.password, req.body.email, req.body.firstName, req.body.lastName)) {
        RegisterDB(new User(req.body))
            .then(response => res.status(200).send(response))
            .catch(err => res.status(400).send(err))
    }
}