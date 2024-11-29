import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";

const Header = ({ menuItems }) => {
    return (
        <header className="px-4 py-4 shadow-lg fixed top-0 bg-white z-50 w-full">
            <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
                <Logo />
                <ul className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`${item.link}`}
                                className="hover:text-orange-500"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Search />
            </nav>
        </header>
    );
};

export default Header;
