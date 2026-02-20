import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import { Flame } from "lucide-react";

interface FooterProps {
    variant?: 'A' | 'B';
}

export default function Footer({ variant = 'A' }: FooterProps) {

    if (variant === 'B') {
        return (
            <footer className="bg-[#1f1915] text-white py-16 font-sans">
                <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">

                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary text-white font-bold px-2 py-1 rounded text-xl italic font-heading">
                                🥟
                            </div>
                            <span className="font-heading font-bold text-2xl text-white leading-tight">
                                Thapa Ji Ke Momos
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                            Crafting the finest momos in Kota since 2015. Our secret recipe has been passed down through generations to bring you the most authentic taste.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Youtube className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-start-7 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/menu" className="text-gray-400 hover:text-white transition-colors">Digital Menu</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
                            <li><Link href="/location" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Store Hours</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex justify-between text-gray-400 border-b border-white/5 pb-2">
                                <span>Mon - Fri</span>
                                <span>11 AM - 11 PM</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Sat - Sun</span>
                                <span>11 AM - 12 AM</span>
                            </li>
                        </ul>
                        <div className="mt-6 text-primary font-bold flex items-center gap-2 text-sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            +91 98765-43210
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Thapa Ji Ke Momos. Handcrafted with flavor in Kota, Rajasthan.
                </div>
            </footer>
        );
    }

    // Variant A (Light Footer)
    return (
        <footer className="w-full bg-white py-10 font-sans border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <Link href="/" className="flex items-center gap-2">
                    <span className="text-primary text-2xl">🥟</span>
                    <span className="font-heading font-extrabold text-lg text-text-primary tracking-tight uppercase">
                        Thapa Ji Ke Momos
                    </span>
                </Link>

                <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-bold text-gray-500">
                    <Link href="/menu" className="hover:text-primary transition-colors">Menu</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    <Link href="/location" className="hover:text-primary transition-colors">Support</Link>
                </nav>

                <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center hover:bg-orange-100 transition-colors">
                        <Instagram className="w-4 h-4 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center hover:bg-orange-100 transition-colors">
                        <Youtube className="w-4 h-4 text-primary" />
                    </a>
                </div>

            </div>
            <div className="max-w-[1440px] mx-auto px-6 mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400 font-medium">
                © {new Date().getFullYear()} Thapa Ji Ke Momos. All rights reserved.
            </div>
        </footer>
    );
}
