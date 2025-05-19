import Image from "next/image";
import bg from "../../public/home-background.jpg"
import RenderModel from "../components/RenderModel";
import MainCharacter from "../components/models/MainCharacter";
import Navigation from "../components/navigation/index";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <Image priority sizes="100vw" src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-40" />

            <div className="w-full h-screen relative">
                <Navigation />
                <RenderModel>
                    <MainCharacter />
                </RenderModel>
            </div>
        </main>
    )
}