import Header from "@/components/sections/Header";
import DigitalMenu from "@/components/sections/DigitalMenu";
import Footer from "@/components/sections/Footer";

export const metadata = {
    title: 'Menu | Thapa Ji Ke Momos',
    description: 'Explore our digital menu of authentic mountain momos.',
};

export default function MenuPage() {
    return (
        <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-[#fbfbfa]">
            <Header variant="B" />
            <DigitalMenu />
            <Footer variant="B" />
        </main>
    );
}
