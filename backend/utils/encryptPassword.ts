import Cryptr from "cryptr"
import bcrypt from "bcryptjs"

const SALT = 10

export async function EncryptPassword(password: string) {
   return await bcrypt.hash(password, SALT).then(hash => hash )
}