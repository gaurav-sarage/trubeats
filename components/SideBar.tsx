"use client";

interface SidebarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({
    children
}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SideBar;