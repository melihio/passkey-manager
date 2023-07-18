import { User } from "../models/user";

export async function DoesEmailExists(email: string): Promise<boolean> {
    const result = await User.findAndCountAll({ where: { email: email, } })
    if (result.count) {
        return true
    }
    return false
}

export async function DoesUsernameExists(username: string): Promise<boolean> {
    const result = await User.findAndCountAll({ where: { username: username, } })
    if (result.count) {
        return true
    }
    return false
}