import { User } from "../models/user";


export async function GetUserByUsername(username: string): Promise<RepositoryReturnType> {
    return new Promise<RepositoryReturnType>(async (resolve, reject) => {
        const request = await User.findAll({
            where: { username: username }
        })
        if (request.length === 1) {
            const user = request[0]
            resolve(new RepositoryReturnType(false, user))
        }
        else
            reject('An Error occurred')
    })
}

class RepositoryReturnType {
    constructor(status: boolean, data: any) {
        this.status = status;
        this.data = data;
    }
    status: boolean;
    data: any;
}