import Header from "@/components/sections/Header";
import ReviewsAndLocation from "@/components/sections/ReviewsAndLocation";
import Footer from "@/components/sections/Footer";

export const metadata = {
    title: 'Location & Reviews | Thapa Ji Ke Momos',
    description: 'Find our store in Kota and read what our amazing customers say.',
};

export default function LocationPage() {
    return (
        <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-[#fbfbfa]">
            <Header variant="C" />
            <ReviewsAndLocation />
            <Footer variant="A" />
        </main>
    );
}
