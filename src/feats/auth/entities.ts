export type Permission = "dashboard"

export type User = {
    name: string,
    permissions: Permission[]
}

export type Tokens = {
    access: string,
    refresh: string,
}