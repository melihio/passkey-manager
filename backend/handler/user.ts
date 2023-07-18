import { Request, Response } from "express";
import { isNullOrEmpty } from "../utils/isNullOrEmpty";
import { LoginDB, RegisterDB } from "../db/user";
import { User } from "../models/user";
import { ReturnType } from "../models/ReturnType";
import { EncryptPassword } from "../utils/encryptPassword";

export async function Register(req: Request, res: Response) {
    if (!isNullOrEmpty(req.body.username, req.body.password, req.body.email, req.body.firstName, req.body.lastName)) {
        req.body.password = await EncryptPassword(req.body.password)
        console.log(req.body.password)
        RegisterDB(new User(req.body))
            .then(response => res.status(200).send(response))
            .catch(err => res.status(400).send(err))
    }
    else res.status(401).send(new ReturnType(false, "Invalid parameters", null))
}

export async function Login(req: Request, res: Response) {
    if (!isNullOrEmpty(req.body.username, req.body.password))
        LoginDB(req.body.username, req.body.password)
            .then(response => res.status(200).send(response))
            .catch(err => res.status(400).send(err))
    else res.status(401).send(new ReturnType(false, "Invalid parameters", null))
}