import ItemCard from "@component/component/ItemCard";
import Options from "@component/component/Options";
import Title from "@component/component/Title";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex justify-center w-screen h-screen p-8">
            <div className="flex w-full h-full max-w-7xl flex-col items-center justify-center">
                <Title></Title>
                <Options></Options>
                <div className="flex flex-grow flex-row w-full bg-primary p-1">
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                </div>
            </div>
        </main>
    );
}
