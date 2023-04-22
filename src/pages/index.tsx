import ItemCard from "@component/component/ItemCard";
import ItemList from "@component/component/ItemList";
import Options from "@component/component/Options";
import SortSearchButton from "@component/component/SortSearchButton";
import Title from "@component/component/Title";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex justify-center w-screen h-full min-h-screen p-8 bg-primary">
            <div className="flex w-full h-full max-w-7xl flex-col items-center justify-center bg-primaryLight p-1 rounded-md">
                <Title></Title>
                <Options></Options>
                <ItemList />
            </div>
        </main>
    );
}
