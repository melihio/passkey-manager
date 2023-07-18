export class ReturnType {
    constructor(status: boolean, message: string, data: any) {
        this.status = status
        this.message = message
        this.data = data
    }

    status: boolean
    message: string
    data: any
}