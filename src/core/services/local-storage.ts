export default class LocalStorage {
    private static readonly keys = {
        // UI
        isSidebarOpened: "ui__is-sidebar-opened"
    }
    
    static get isSidebarOpened(): boolean {
        return localStorage.getItem(LocalStorage.keys.isSidebarOpened) === "true";
    }
    
    static set isSidebarOpened(value) {
        localStorage.setItem(LocalStorage.keys.isSidebarOpened, String(value));
    }
}