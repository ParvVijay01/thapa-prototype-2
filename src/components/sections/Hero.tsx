import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto h-[600px] md:h-[650px] flex items-center justify-start overflow-hidden font-sans rounded-3xl my-6">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Steaming Hot Momos"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f1915]/95 via-[#1f1915]/70 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full px-12 md:px-20">
                <div className="max-w-2xl text-white">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 w-max mb-6 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-200">Kota's Most Loved Momos</span>
                    </div>

                    <h1 className="font-heading text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                        Thapa Ji Ke<br />Momos
                    </h1>
                    <h2 className="text-3xl font-bold text-primary mt-2 mb-6 font-heading">
                        थापा जी के मोमोज
                    </h2>

                    <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-medium">
                        Experience the authentic taste of the mountains in the heart of Kota. Fresh, steaming, and served with our signature spicy chutney.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href="/menu" className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-bold transition-colors duration-200 text-base shadow flex items-center justify-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            Order Now
                        </Link>
                        <Link href="/menu" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-lg font-bold transition-colors duration-200 text-base backdrop-blur-sm flex items-center justify-center">
                            View Menu
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col bg-white rounded-xl shadow-2xl p-5 w-64">
                <div className="flex text-primary mb-1 gap-1">
                    {"★".repeat(4).split('').map((star, i) => (
                        <span key={i} className="text-xl">{star}</span>
                    ))}
                    <span className="text-xl text-orange-200">★</span>
                </div>
                <div className="font-heading text-3xl font-extrabold text-text-primary mb-1">
                    4.9<span className="text-lg text-gray-400 font-bold">/5</span>
                </div>
                <div className="text-gray-500 text-xs font-medium mb-3">
                    12k+ Google Reviews
                </div>
                <div className="text-[10px] font-bold text-green-600 tracking-widest uppercase bg-green-50 w-max px-2 py-1 rounded">
                    +Top Rated In Rajasthan
                </div>
            </div>
        </section>
    );
}
