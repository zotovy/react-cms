import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@feats/auth/redux/state";
import { login } from "@feats/auth/redux/auth-actions";


const slice = createSlice({
    name: "auth",
    initialState: () => {
        return {type: "not-authorized"} as AuthState
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(login.fulfilled, (_, action) => action.payload)
})

export default slice.reducer