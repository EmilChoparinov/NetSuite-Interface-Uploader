declare type credentials = {
    email: string,
    password: string,
    roleId: string,
    account: string,
    molecule?: string
}

declare type accountNames = {
    ids: string[]
}

declare type passwords = {
    [key: string]: true
}