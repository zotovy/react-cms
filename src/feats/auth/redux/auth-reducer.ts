import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@feats/auth/redux/state";
import { login } from "@feats/auth/redux/auth-actions";
import LocalStorage from "@core/services/local-storage";

const slice = createSlice({
    name: "auth",
    initialState: () => {
        return {type: "not-authorized"} as AuthState
    },
    reducers: {
        logout: (_state, _action: PayloadAction<void>) => {
            // Remove user & tokens
            LocalStorage.user = undefined
            LocalStorage.tokens = undefined

            return {type: "not-authorized"}
        }
    },
    extraReducers: builder => builder
        .addCase(login.fulfilled, (_, action) => action.payload)
})

export const { logout } = slice.actions

export default slice.reducer