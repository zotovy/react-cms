import { LoginArgs } from "@feats/auth/redux/auth-actions";
import { LoginStatus } from "@feats/auth/redux/state";
import { wait } from "@core/utils/wait";
import LocalStorage from "@core/services/local-storage";


export default class AuthService {
    
    static async login(arg: LoginArgs): Promise<LoginStatus> {
        await wait(1500)
        if (arg.email === "admin@gmail.com" && arg.password === "12345") {
            return {
                user: {
                    name: "Roman Shchurov",
                    permissions: ["dashboard"]
                },
                tokens: {
                    access: "123.123.123",
                    refresh: "123.456.789"
                }
            }
        }
        return "invalid-email"
    }
    
    static isSignedIn(): boolean {
        return !!LocalStorage.user && !!LocalStorage.tokens
    }
    
    static async logout() {
        LocalStorage.user = undefined
        LocalStorage.tokens = undefined
    }
}