"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sideabr-item";
import { usePathname } from "next/navigation";

const guestRouts = [
    {
        icon: Layout,
        level: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        level: "Browse",
        href: "/search"
    },
];


const teacherRoutes = [
    {
        icon: List,
        level: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        level: "Browse",
        href: "/teacher/analyitics"
    },
];



export const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("teacher");

    const routs = isTeacherPage ? teacherRoutes : guestRouts;
    return (
        <div className="flex flex-col w-full">
            {
                routs?.map((route) => (
                    <SidebarItem 
                        key={route.href} 
                        icon={route.icon} 
                        level={route.level} 
                        href={route.href} 
                    />
                ))
            }
        </div>
    );
};
