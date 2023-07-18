import Cryptr from "cryptr"
import bcrypt from "bcryptjs"

const SALT = 10

async function EncryptPassword(password: string){
    return bcrypt.hash(password, SALT, function(err,result){
        if(err) return err
        return result
    })
}