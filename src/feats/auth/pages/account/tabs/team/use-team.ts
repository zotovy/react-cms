import { User } from "@feats/auth/entities";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useTeam() {
    const data = useQuery(["teams"], fetchTeams, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: Infinity,
        cacheTime: Infinity,
    })

    return {
        ...data
    }
}

async function fetchUsers(amount: number = 5): Promise<User[]> {
    const response = await axios.get(`https://randomuser.me/api/?results=${ amount }`)
    return response.data.results.map((data: any) => ({
        id: data.login.uuid,
        email: data.email,
        permissions: [],
        role: "user",
        firstName: data.name.first,
        lastName: data.name.last,
        username: data.login.username,
        profileImage: data.picture.large,
        bio: "",
        country: data.location.country,
        timezone: data.location.timezone.description,
        createdAt: new Date(),
        lastActiveAt: new Date(),
    }) as User)
}

export async function fetchTeams() {
    const users = await Promise.all([
        fetchUsers(3),
        fetchUsers(6),
        fetchUsers(5),
    ])

    return {
        admins: users[0],
        moderators: users[1],
        translators: users[2],
    }
}