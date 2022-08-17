import { Permission } from "@feats/auth/entities";
import { useAppSelector } from "@redux/hooks";
import { selectUserPermissions } from "@feats/auth/redux/auth-selectors";

export function useHasPermission(permission: Permission | Permission[]) {
    const permissions = useAppSelector(selectUserPermissions)
    
    if (Array.isArray(permission)) {
        return permissions.some(x => permission.includes(x))
    }
    return permissions.some(x => x === permission)
}