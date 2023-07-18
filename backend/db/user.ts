import { User } from "../models/user";
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