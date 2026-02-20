"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
    variant?: 'A' | 'B' | 'C';
}

export default function Header({ variant = 'A' }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="w-full bg-white z-50 relative">
            <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-primary text-2xl">🥟</span>
                    <div className="flex flex-col">
                        <span className="font-heading font-bold text-xl text-text-primary leading-tight">
                            Thapa Ji Ke Momos
                        </span>
                        {variant === 'B' && (
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                                KOTA'S PRIDE SINCE 2015
                            </span>
                        )}
                    </div>
                </Link>

                {/* Center Navigation */}
                <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
                    {variant === 'A' && (
                        <>
                            <Link href="/" className="text-text-primary hover:text-primary transition-colors">Home</Link>
                            <Link href="/menu" className="text-text-primary hover:text-primary transition-colors">Menu</Link>

                            <Link href="/location" className="text-text-primary hover:text-primary transition-colors">Location</Link>

                        </>
                    )}
                    {variant === 'B' && (
                        <>
                            <Link href="/" className="text-text-primary hover:text-primary transition-colors">Home</Link>
                            <Link href="/menu" className="text-primary hover:text-primary-hover transition-colors">Menu</Link>

                            <Link href="/location" className="text-text-primary hover:text-primary transition-colors">Locations</Link>

                        </>
                    )}
                    {variant === 'C' && (
                        <>
                            <Link href="/" className="text-text-primary hover:text-primary transition-colors">Home</Link>
                            <Link href="/menu" className="text-text-primary hover:text-primary transition-colors">Menu</Link>
                            <Link href="/location" className="text-primary hover:text-primary-hover transition-colors">Location</Link>

                        </>
                    )}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    {variant === 'B' && (
                        <div className="hidden lg:flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search momos..."
                                className="bg-transparent text-sm focus:outline-none w-48"
                            />
                        </div>
                    )}

                    <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm">
                        Order Now
                    </button>

                    {variant === 'A' && (
                        <div className="hidden sm:block w-10 h-10 rounded-full border-2 border-orange-200 overflow-hidden flex-shrink-0 relative">
                            <Image
                                src="/images/avatar.png"
                                alt="User Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden text-text-primary p-2 -mr-2 flex items-center justify-center cursor-pointer"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 z-50">
                    <nav className="flex flex-col gap-4 font-bold text-lg text-text-primary">
                        {variant === 'A' && (
                            <>
                                <Link href="/" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Home</Link>
                                <Link href="/menu" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Menu</Link>
                                <Link href="/location" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Location</Link>
                            </>
                        )}
                        {variant === 'B' && (
                            <>
                                <Link href="/" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Home</Link>
                                <Link href="/menu" onClick={toggleMobileMenu} className="text-primary transition-colors">Menu</Link>
                                <Link href="/location" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Locations</Link>
                            </>
                        )}
                        {variant === 'C' && (
                            <>
                                <Link href="/" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Home</Link>
                                <Link href="/menu" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Menu</Link>
                                <Link href="/location" onClick={toggleMobileMenu} className="text-primary transition-colors">Location</Link>
                            </>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
