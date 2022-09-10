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

export function fullName(user: User | undefined | null) {
    if (!user) return ""
    let fullName = ""
    if (user.firstName) fullName += user.firstName + " "
    if (user.lastName) fullName += user.lastName
    return fullName
}