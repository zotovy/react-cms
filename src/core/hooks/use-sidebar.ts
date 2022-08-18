import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectIsSidebarOpen, toggle } from "@core/redux/sidebar-reducer";
import { useSelector } from "react-redux";
import { selectUser } from "@feats/auth/redux/auth-selectors";
import { useNavigate } from "react-router-dom";
import { logout } from "@feats/auth/redux/auth-reducer";

/**
 * React hook that load & changes is sidebar opened UI property
 * return isSideBarOpened flag and function to toggle this flag
 */
export function useSidebar() {
    const dispatch = useAppDispatch()
    const open = useAppSelector(selectIsSidebarOpen)
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    const toggleSidebar = useCallback(() => {
        dispatch(toggle())
    }, [dispatch])

    return {
        isSidebarOpened: open, toggleSidebar,
        handleLogout: useCallback(() => {
            dispatch(logout())
            navigate("/")
        }, [navigate, dispatch]),
        user,
    }
}