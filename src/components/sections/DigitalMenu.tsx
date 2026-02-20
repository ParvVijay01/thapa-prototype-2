"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter, Star, Coffee, Utensils, Droplets, CookingPot, Leaf } from "lucide-react";
import MenuItemCard from "@/components/ui/MenuItemCard";

const categories = [
    { id: "bestsellers", name: "Bestsellers", icon: Star },
    { id: "veg_steamed", name: "Veg Steamed", icon: Leaf },
    { id: "paneer_special", name: "Paneer Special", icon: CookingPot },
    { id: "fried_crispy", name: "Fried & Crispy", icon: Utensils },
    { id: "gravy_momos", name: "Gravy Momos", icon: Droplets },
    { id: "soups_thukpa", name: "Soups & Thukpa", icon: Coffee },
];

const menuItems = [
    // Bestsellers
    { id: "1", name: "Kurkure Paneer Momos", description: "Extra crunchy coating with a melt-in-mouth spicy paneer filling...", price: 149, image: "/images/fried_momo.png", category: "bestsellers", badge: "MUST TRY", badgeColor: "orange" as const, isVeg: true },
    { id: "2", name: "Classic Veg Steamed", description: "Our signature steamed momos filled with finely chopped cabbage,...", price: 99, image: "/images/steamed_momo.png", category: "bestsellers", isVeg: true },
    { id: "3", name: "Schezwan Fried Momos", description: "Crispy fried momos tossed in our house-made spicy schezwan sauce.", price: 129, image: "/images/fried_momo.png", category: "bestsellers", badge: "SPICY", badgeColor: "red" as const, isVeg: true },
    // Veg Steamed
    { id: "4", name: "Spinach & Corn Steamed", description: "A healthy twist with fresh spinach leaves and sweet corn kernels.", price: 119, image: "/images/steamed_momo.png", category: "veg_steamed", isVeg: true },
    { id: "5", name: "Garlic Mushroom Steamed", description: "Earthy mushrooms sautéed with garlic for an explosion of umami.", price: 139, image: "/images/steamed_momo.png", category: "veg_steamed", isVeg: true },
];

export default function DigitalMenu() {
    const [activeCategory, setActiveCategory] = useState("bestsellers");

    const filteredItems = menuItems.filter(
        (item) => item.category === activeCategory
    );

    return (
        <section className="pb-24 w-full max-w-[1440px] mx-auto px-6 font-sans">

            {/* Banner Area */}
            <div className="w-full h-[220px] rounded-bl-3xl rounded-br-3xl overflow-hidden relative mb-12 shadow-md">
                <Image
                    src="/images/menu-bg.png"
                    alt="Menu Banner"
                    fill
                    className="object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f1915]/95 via-[#1f1915]/70 to-[#1f1915]/30"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-3">
                        Our Digital Menu
                    </h1>
                    <p className="text-gray-300 max-w-md font-medium">
                        Authentic flavors from the heart of Rajasthan. Each piece is hand-folded with love.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">
                            Categories
                        </h3>
                        <nav className="space-y-1 mb-8">
                            {categories.map((category) => {
                                const isActive = activeCategory === category.id;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-r-lg transition-colors duration-200 text-left ${isActive
                                            ? "bg-orange-50 text-primary font-bold border-l-4 border-primary"
                                            : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent font-medium"
                                            }`}
                                    >
                                        <category.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-gray-400"}`} />
                                        <span>{category.name}</span>
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Chef's Choice Promo */}
                        <div className="bg-orange-50/50 rounded-xl p-5 border border-orange-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-40 translate-x-1/2 -translate-y-1/2"></div>
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2 relative z-10">
                                Chef's Choice
                            </h4>
                            <p className="text-sm text-gray-700 font-medium relative z-10">
                                Try our new Afghani Gravy Momos with Creamy Dip!
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Menu Grid Content */}
                <div className="flex-1">
                    {/* Active Category Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold font-heading text-text-primary flex items-center gap-3">
                            {categories.find(c => c.id === activeCategory)?.icon && (
                                <span className="text-primary">
                                    {/* Render active icon */}
                                    {(() => {
                                        const Icon = categories.find(c => c.id === activeCategory)?.icon || Leaf;
                                        return <Icon className="w-6 h-6" />;
                                    })()}
                                </span>
                            )}
                            {categories.find((c) => c.id === activeCategory)?.name}
                        </h2>
                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <Filter className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <MenuItemCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                badge={item.badge}
                                badgeColor={item.badgeColor}
                                isVeg={item.isVeg}
                            />
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                            <Coffee className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-text-primary mb-2">No items found</h3>
                            <p className="text-gray-500">We are currently updating this category. Please check back later!</p>
                        </div>
                    )}

                    {/* Static Second Section as seen in Figma (Veg Steamed is visible below bestsellers) */}
                    {activeCategory === "bestsellers" && (
                        <div className="mt-16">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold font-heading text-text-primary flex items-center gap-3">
                                    <span className="text-primary"><Leaf className="w-6 h-6" /></span>
                                    Veg Steamed
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {menuItems.filter(item => item.category === "veg_steamed").map((item) => (
                                    <MenuItemCard
                                        key={`static-${item.id}`}
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        image={item.image}
                                        badge={item.badge}
                                        badgeColor={item.badgeColor}
                                        isVeg={item.isVeg}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
