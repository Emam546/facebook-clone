import { Link, NavLink } from "react-router-dom";
import "./style.css";
interface LinkProps {
    iconName: string;
    numIcon?: string;
    link: string;
}
function ListIcon({ iconName, link, numIcon }: LinkProps) {
    return (
        <li className="w-1/5 md:w-max text-center">
            <NavLink
                to={link}
                className={({ isActive }) => `
                    w-full 
                    text-3xl 
                    py-2 px-3 
                    xl:px-12 
                    cursor-pointer 
                    text-center 
                    inline-block 
                    ${
                        !isActive
                            ? `rounded 
                        text-gray-600 
                        hover:bg-gray-100 
                        dark:hover:bg-dark-third 
                        dark:text-dark-txt 
                        relative`
                            : ` text-blue-500 border-b-4 border-blue-500`
                    }
                    
                `}
            >
                <i className={`bx ${iconName}`}></i>
                {numIcon && (
                    <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                        {numIcon}
                    </span>
                )}
            </NavLink>
        </li>
    );
}
const iconNames = [
    ["bxs-home", "/"],
    ["bx-group", "/groups"],
    ["bx-slideshow", "/videos"],
    ["bx-store", "/store"],
    ["bx-layout", "/layout"],
    ["bx-bell", "/*"],
    ["bx-menu", "/*"],
];
export default function NavBar() {
    return (
        <nav className="bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
            {/* <!-- NAV LEFT --> */}
            <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
                <Link to="#" className="mr-2 hidden md:inline-block">
                    <img
                        src="./images-face/fb-logo.png"
                        alt="Facebook logo"
                        className="w-24 sm:w-20 lg:w-10 h-auto"
                    />
                </Link>
                <Link to="#" className="inline-block md:hidden">
                    <img
                        src="./images-face/fb-logo-mb.png"
                        alt=""
                        className="w-32 h-auto"
                    />
                </Link>
                <div className="flex items-center justify-between space-x-1">
                    <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                        <i className="bx bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt"></i>
                        <input
                            type="text"
                            placeholder="Search Facebook"
                            className="outline-none bg-transparent hidden xl:inline-block"
                        />
                    </div>
                    <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-fourth rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt relative">
                        <i className="bx bxl-messenger"></i>
                        <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                            2
                        </span>
                    </div>
                    <div
                        className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-fourth rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt"
                        id="dark-mode-toggle-mb"
                    >
                        <i className="bx bxs-moon"></i>
                    </div>
                </div>
            </div>

            {/* <!-- NAV CENTER --> */}
            <ul className="flex w-full lg:w-max items-center justify-center">
                {iconNames.map(([name, link], i) => {
                    return <ListIcon key={i} link={link} iconName={name} />;
                })}
            </ul>

            {/* <!-- NAV RIGHT --> */}
            <RightNav />
        </nav>
    );
}
function RightNav() {
    return (
        <ul className="hidden md:flex mx-4 items-center justify-center">
            <li className="h-full xl:flex">
                <Link
                    to="https://www.facebook.com/shanedelmoira.mantua.7"
                    className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
                >
                    <img
                        src="./images-face/me.png"
                        alt="Profile picture"
                        className="rounded-full h-7 w-7"
                    />
                    <span className="mx-2 font-semibold dark:text-dark-txt">
                        Shane
                    </span>
                </Link>
            </li>

            <li>
                <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-fourth dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                    <i className="bx bxs-grid"></i>
                </div>
            </li>

            <li>
                <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-fourth dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                    <i className="bx bxl-messenger"></i>
                    <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                        2
                    </span>
                </div>
            </li>

            <li>
                <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-fourth dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                    <i className="bx bxs-bell"></i>
                    <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                        9+
                    </span>
                </div>
            </li>

            <li>
                <div
                    className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-fourth dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
                    id="dark-mode-toggle"
                >
                    <i className="bx bxs-moon"></i>
                </div>
            </li>
        </ul>
    );
}
