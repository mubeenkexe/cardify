import { FaBookOpen, FaChartLine, FaCirclePlus } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

export const NAVIGATION_LINKS = [
    {
        name: "My Decks",
        href: "/dashboard/decks",
        icon: <MdDashboard />,
    },
    {
        name: "Create New Deck",
        href: "/dashboard/create-deck",
        icon: <FaCirclePlus />
    },
    {
        name: "Study Session",
        href: "/dashboard/study",
        icon: <FaBookOpen />
    },
    {
        name: "Progress",
        href: "/dashboard/progress",
        icon: <FaChartLine />
    },
];
