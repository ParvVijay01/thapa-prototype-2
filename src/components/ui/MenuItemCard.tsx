import Image from 'next/image';
import { Plus } from 'lucide-react';

interface MenuItemProps {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    badge?: string;
    badgeColor?: 'orange' | 'red' | 'green';
    isVeg?: boolean;
}

export default function MenuItemCard({
    name,
    description,
    price,
    image,
    badge,
    badgeColor = 'orange',
    isVeg = true,
}: MenuItemProps) {

    const badgeColors = {
        orange: 'bg-orange-500',
        red: 'bg-red-500',
        green: 'bg-green-500',
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full font-sans">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {badge && (
                    <div className={`absolute top-4 left-4 ${badgeColors[badgeColor]} text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-widest`}>
                        {badge}
                    </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white font-bold text-text-primary px-3 py-1.5 rounded-lg shadow-md z-10 flex items-center">
                    ₹{price}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-lg text-text-primary line-clamp-1 flex-grow pr-2">
                        {name}
                    </h3>
                    <div className="flex-shrink-0 flex items-center justify-center p-1 mt-0.5" title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
                        <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        </div>
                    </div>
                </div>

                <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-grow">
                    {description}
                </p>

                <button className="w-full flex items-center justify-center gap-2 bg-gray-50/50 hover:bg-gray-100 text-text-primary font-bold text-[13px] py-2.5 rounded-lg transition-colors border border-gray-200 mt-auto">
                    <span>Add to Plate</span>
                    <Plus className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
}
