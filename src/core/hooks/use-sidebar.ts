import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
    shrinkItem,
    openSidebar,
    selectIsSidebarItemExpanded,
    selectIsSidebarOpen,
    toggle, toggleExpand,
    toggleMobile, selectIsSidebarMobileOpen,
} from "@core/redux/sidebar-reducer";
import { useSelector } from "react-redux";
import { selectUser } from "@feats/auth/redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";
import { logout } from "@feats/auth/redux/auth/auth-reducer";
import { ContainerNavPage, isContainerNavPage, NavPage } from "@core/types/layout";
import useCollapse from "react-collapsed";
import { useMediaQuery } from "react-responsive";

/**
* React hook that load & changes is sidebar opened UI property
* @return {object} object with isSidebarOpen property, toggleSidebar function, user property, logout function
*/
export function useSidebar() {
    const dispatch = useAppDispatch()
    const open = useAppSelector(selectIsSidebarOpen)
    const mobileOpen = useAppSelector(selectIsSidebarMobileOpen)
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    const isMobile = useMediaQuery({query: "(max-width: 767px)"})

    const toggleSidebar = () => {
        if (isMobile) {
            dispatch(toggleMobile())
        } else {
            dispatch(toggle())
        }
    }

    return {
        isSidebarOpened: open,
        mobileOpen,
        toggleSidebar,
        toggleMainSidebar: () => dispatch(toggle()),
        handleLogout: () => {
            dispatch(logout())
            return navigate("/")
        },
        user,
    }
}

/**
 * React hook that used to watch for sidebar open state changes
 * @return {object} object with isSidebarOpen property
 */
export function useSidebarItem(props: NavPage | ContainerNavPage, key: string) {
    const open = useAppSelector(selectIsSidebarOpen)
    const dispatch = useAppDispatch()
    const expanded = useAppSelector(selectIsSidebarItemExpanded(key))
    const [firstRender, setFirstRender] = useState(true)
    const isMobile = useMediaQuery({query: '(max-width: 767px)'})

    useEffect(() => {
        if (!firstRender && !open) dispatch(shrinkItem(key));
        setFirstRender(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])
    
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        isExpanded: expanded,
        onExpandStart: () => dispatch(openSidebar()),
    })

    return {
        open,
        hasChildren: isContainerNavPage(props) ? (props.children?.length ?? 0) > 0 : false,
        collapsed: !isExpanded,
        getCollapseProps,
        getToggleProps: () => getToggleProps({
            onClick: isContainerNavPage(props)
                ? () => dispatch(toggleExpand(key))
                : () => {
                    if (isMobile) dispatch(toggleMobile());
                }
        }),
        active: isContainerNavPage(props)
            ? props.children?.some(x => window.location.href.includes(x.url)) ?? false
            : window.location.href.includes(props.url),
        activeChildren: isContainerNavPage(props)
            ? props.children.findIndex(x => window.location.href.includes(x.url))
            : undefined,
        handleItemClick: () => {
            if (isMobile) dispatch(toggleMobile());
        },
    }
}