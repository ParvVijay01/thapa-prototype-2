import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

const delights = [
    {
        id: 1,
        category: "THE CLASSIC",
        title: "Veggie Steamed Momos",
        description: "Finely chopped cabbage, carrots, and onions mixed with secret Himalayan herbs.",
        price: "₹80 onwards",
        image: "/images/steamed_momo.png"
    },
    {
        id: 2,
        category: "PREMIUM CHOICE",
        title: "Paneer Fried Momos",
        description: "Succulent chunks of paneer tossed in spicy peri peri and deep fried to perfection.",
        price: "₹120 onwards",
        image: "/images/fried_momo.png"
    },
    {
        id: 3,
        category: "NON-VEG FAVORITE",
        title: "Chicken Kurkure Momos",
        description: "Juicy minced chicken coated with a crunchy batter, served with Mint Mayo.",
        price: "₹140 onwards",
        image: "/images/steamed_momo.png"
    }
];

export default function PopularDelights() {
    return (
        <section className="py-20 w-full max-w-[1440px] mx-auto px-6 font-sans">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-text-primary mb-3">
                        Our Popular Delights
                    </h2>
                    <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed">
                        Explore our most ordered varieties. Each portion is served with extra<br className="hidden md:block" />
                        spicy garlic chutney and mayo.
                    </p>
                </div>
                <Link
                    href="/menu"
                    className="text-primary font-bold text-sm flex items-center gap-1 hover:text-primary-hover transition-colors whitespace-nowrap"
                >
                    View Full Menu <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {delights.map((item) => (
                    <div
                        key={item.id}
                        className="group relative h-[420px] rounded-[24px] overflow-hidden bg-[#111] border border-[#222] shadow-xl flex flex-col justify-end p-6"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full mt-auto text-left transform translate-y-0 transition-transform duration-300">
                            <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2">
                                {item.category}
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="font-bold text-white text-lg">
                                    {item.price}
                                </div>
                                <button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
