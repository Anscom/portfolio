import { Roboto } from "next/font/google";
import "./global.css";
import clsx from "clsx";


const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata = {
    title: "Anscom Portfolio",
    description: "amazing"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={clsx(roboto.variable, "bg-background text-foreground")}>{children}</body>
        </html>
    )
}