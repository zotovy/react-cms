import { useAppDispatch } from "@redux/hooks";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "@feats/auth/redux/auth-reducer";
import { useDarkMode } from "@core/hooks/use-dark-mode";
import { useSidebar } from "@core/hooks/use-sidebar";

export function useNavbar() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const isDark = useDarkMode()
    const {toggleSidebar} = useSidebar()
    
    return {
        isDark,
        toggleSidebar,
        handleLogout: useCallback(() => {
            dispatch(logout())
            navigate("/")
        }, [navigate, dispatch])
    }
}