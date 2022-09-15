import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@feats/auth/redux/auth-selectors";
import { useState } from "react";

export function useAccount() {
    const user = useAppSelector(selectUser)
    const [activeTab, setActiveTab] = useState(0)
    
    return {
        user,
        activeTab,
        setActiveTab,
        handleTabChange: (dropdownOption: any) => {
            setActiveTab(accountTabs.findIndex(x => x.value === dropdownOption.value))
        }
    }
}

export const accountTabs = [
    {
        label: 'Personal info',
        value: 'personal-info',
    },
    {
        label: 'Password',
        value: 'password',
    },
    {
        label: 'Team',
        value: 'team',
    },
    {
        label: "Plan",
        value: 'plan',
    },
    {
        label: "Billing",
        value: "billing",
    },
    {
        label: "Email",
        value: "email",
    },
    {
        label: "Integration", 
        value: "integrations",
    },
    {
        label: "API",
        value: "api",
    }
]