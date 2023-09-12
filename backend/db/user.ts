import { User } from "../models/User";
import bcrypt from "bcryptjs";
import { DoesEmailExists, DoesUsernameExists } from "../utils/UserUtils";
import { ReturnType } from "../models/ReturnType";

export async function RegisterDB(user: User): Promise<ReturnType> {
    return new Promise(async (resolve, reject) => {
        if (await DoesEmailExists(user.email) || await DoesUsernameExists(user.username)) {
            reject(new ReturnType(false, "User already exists", null))
            return
        }
        await user.save()
        resolve(new ReturnType(true, "Successfully Registered", null))
    })
}

export async function LoginDB(username: string, password: string): Promise<ReturnType> {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await User.findAll({ where: { username: username } })
            if (!result.length)
                throw new ReturnType(false, "User not found", null)
            const user = result[0]
            if (await bcrypt.compare(password, user.password))
                resolve(new ReturnType(true, "Login Success", "session"))
            else
                reject(new ReturnType(false, "Wrong password or username", null))
        } catch (err) {
            reject(err)
        }
    })
}