export function isNullOrEmpty(...args: any) {
    for (let arg of args) {
        if (arg === "" || arg === null || arg === undefined)
            return true
    }
    return false;
}