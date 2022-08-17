export type Permission = "dashboard"

export type User = {
    name: string,
    permissions: Permission[],
    role: string,
}

export type Tokens = {
    access: string,
    refresh: string,
}