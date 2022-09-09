import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectIsSidebarOpen, toggle } from "@core/redux/sidebar-reducer";
import { useSelector } from "react-redux";
import { selectUser } from "@feats/auth/redux/auth-selectors";
import { useNavigate } from "react-router-dom";
import { logout } from "@feats/auth/redux/auth-reducer";
import { NavPage } from "@core/types/layout";
import useCollapse from "react-collapsed";

/**
 * React hook that load & changes is sidebar opened UI property
 * @return {object} - object with isSidebarOpen property, toggleSidebar function, user property, logout function
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

/**
 * React hook that used to watch for sidebar open state changes
 * @return {object} - object with isSidebarOpen property
 */
export function useSidebarItem(props: NavPage) {
    const open = useAppSelector(selectIsSidebarOpen)
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        defaultExpanded: (props.children ?? []).some(x => window.location.href.includes(x.url))
    })

    return {
        open,
        hasChildren: (props.children?.length ?? 0) > 0,
        collapsed: !isExpanded,
        getCollapseProps,
        getToggleProps,
    }
}