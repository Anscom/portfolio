import { Roboto } from "next/font/google";
import "./global.css";
import clsx from "clsx";
import FireFliesBackground from "../components/FireFliesBackground";


const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata = {
    title: {
      template:
        "Anscom Portfolio",
      default:
        "Anscom Portfolio",
    },
    description:
    "amazing"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={clsx(roboto.variable, "bg-background text-foreground font-roboto")}>
                {children}
                <FireFliesBackground />
                <div id="my-modal" />
            </body>
        </html>
    )
}