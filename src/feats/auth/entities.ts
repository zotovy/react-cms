export type Permission = "dashboard" | "test"

export type User = {
    email: string,
    permissions: Permission[],
    role: string,
    firstName?: string,
    lastName?: string,
    username?: string,
    profileImage?: string,
    bio?: string,
}

export type Tokens = {
    access: string,
    refresh: string,
}