import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "@core/services/local-storage";
import { RootState } from "@redux/store";

type State = {
    open: boolean,
}

const slice = createSlice({
    name: "core/ui/sidebar",
    initialState: () => {
        return {
            open: LocalStorage.isSidebarOpened,
        } as State
    },
    reducers: {
        toggle: (state) => {
            const newValue = !state.open
            LocalStorage.isSidebarOpened = newValue
            state.open = newValue;
        },
        openSidebar: (state) => {
            LocalStorage.isSidebarOpened = true
            state.open = true;
        }
    }
})

export default slice.reducer

export const { toggle, openSidebar } = slice.actions

export const selectIsSidebarOpen = (state: RootState) => state.coreSidebar.open
