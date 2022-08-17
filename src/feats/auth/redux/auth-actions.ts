import AuthService from "@feats/auth/auth-service";
import { AuthState, ErrorLoginStatus } from "@feats/auth/redux/state";
import LocalStorage from "@core/services/local-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type LoginArgs = {
    email: string,
    password: string,
}

export const login = createAsyncThunk(
    "auth/login", 
    async (args: LoginArgs): Promise<AuthState> => {
        const data = await AuthService.login(args)
        
        // handle error
        if (typeof data === "string") {
           return {
               type: "invalid",
               error: data as ErrorLoginStatus,
           } 
        }
        
        // Save user & tokens
        LocalStorage.user = data.user
        LocalStorage.tokens = data.tokens
        
        return {
            type: "authorized",
            user: data.user,
        }
    }
)
