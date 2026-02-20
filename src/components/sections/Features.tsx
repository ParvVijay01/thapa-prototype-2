import { Leaf, Flame, Package } from "lucide-react";

const features = [
    {
        title: "Fresh Ingredients",
        description: "Handpicked vegetables and premium quality paneer/meat delivered daily from local farms to ensure maximum nutrition.",
        icon: Leaf,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        title: "Authentic Taste",
        description: "Original recipes straight from the mountain regions, blended with our secret spice mix that defines our identity.",
        icon: Flame,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        title: "Hot & Fast",
        description: "Our specialized packaging keeps your momos steaming hot until they reach your doorstep. Express delivery guaranteed.",
        icon: Package,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
];

export default function Features() {
    return (
        <section className="py-20 w-full max-w-[1440px] mx-auto px-6 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[32px] p-10 shadow-sm border border-orange-50/50 hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                    >
                        <div className={`${feature.bg} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-text-primary mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-[15px]">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
