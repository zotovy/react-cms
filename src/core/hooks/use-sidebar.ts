import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectIsSidebarOpen, toggle } from "@core/redux/sidebar-reducer";

/**
 * React hook that load & changes is sidebar opened UI property
 * return isSideBarOpened flag and function to toggle this flag
 */
export function useSidebar() {
    const dispatch = useAppDispatch()
    const open = useAppSelector(selectIsSidebarOpen)

    const toggleSidebar = useCallback(() => {
        dispatch(toggle())
    }, [dispatch])

    return {isSidebarOpened: open, toggleSidebar}
}