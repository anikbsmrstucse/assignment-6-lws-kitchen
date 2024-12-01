import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";
import { Suspense } from "react";

export const metadata = {
    title: "LWS Kitchen - Food Blog and Recipes",
    description: "Food Blog and Recipes",
};

const menuItems = [
    {
        id: "home",
        label: "Home",
        link: "/",
    },
    {
        id: "categories",
        label: "Categories",
        link: "/categories",
    },
    {
        id: "latest-recipes",
        label: "Latest Recipes",
        link: "#latest-recipes",
    },
    {
        id: "handpicked",
        label: "Handpicked",
        link: "#handpicked",
    },
];

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`font-inter antialiased `}>
                <Header menuItems={menuItems} />
                <main className="max-w-screen-xl mx-auto px-4 mt-[100px]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
