import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes"; // Make sure the component name is correctly capitalized

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes /> {/* Updated the component name */}
            </div>
        </div>
    );
};
