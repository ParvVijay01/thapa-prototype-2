import { MapPin, Clock, Phone, Navigation2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ReviewsAndLocation() {
    const reviews = [
        {
            id: 1,
            name: "Rahul Sharma",
            title: "\"Amazing taste & authentic spices!\"",
            text: "The Paneer Kurkure momos are a game changer. Hands down the best in Rajeev Gandhi Nagar area. Hygiene is top notch too!",
            rating: 5,
            role: "Local Guide • 2 days ago",
            initial: "R"
        },
        {
            id: 2,
            name: "Priya Verma",
            title: "\"Nice place for quick bites\"",
            text: "Perfect for students. The red chutney is spicy and flavorful. Great service and always fresh.",
            rating: 4,
            role: "5 star reviewer • 1 week ago",
            initial: "P",
            bgColor: "bg-gray-700"
        },
        {
            id: 3,
            name: "Amit Singh",
            title: "\"Best in Kota!\"",
            text: "Tried almost everything on the menu. The Tandoori Momos are extraordinary.",
            rating: 5,
            role: "Student • 3 days ago",
            initial: "A",
            bgColor: "bg-black"
        }
    ];

    return (
        <section className="pb-24 pt-12 w-full max-w-[1440px] mx-auto px-6 font-sans">

            {/* Title Block */}
            <div className="mb-8">
                <div className="text-[10px] font-bold text-primary tracking-widest uppercase bg-orange-50 w-max px-3 py-1.5 rounded mb-4">
                    FIND US IN KOTA
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-text-primary mb-3">
                    Visit Us & Reviews
                </h1>
                <p className="text-gray-500 max-w-lg text-[15px] leading-relaxed">
                    The local favorite for authentic momos, located right in the heart of the coaching hub.
                </p>
            </div>

            {/* Huge Map Banner */}
            <div className="w-full h-[400px] mb-12 rounded-[32px] overflow-hidden relative shadow-md bg-[#e3e8e1]">
                <Image
                    src="/images/map-light.png"
                    alt="Store Location Interactive Map"
                    fill
                    className="object-cover object-center opacity-70 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#d1d8cd]/80 to-[#f4f6f3]/80 mix-blend-multiply"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="bg-primary p-3 rounded-full text-white shadow-xl relative z-10 transition-transform group-hover:scale-110">
                        <span className="font-bold text-xl italic font-heading">T</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg font-bold text-sm text-text-primary mt-2 shadow-lg z-10">
                        Thapa Ji ke momos
                    </div>
                    {/* simple map pin tail */}
                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[16px] border-t-[#333] border-r-[12px] border-r-transparent absolute top-[40px] z-0 drop-shadow-md"></div>
                    {/* shadow */}
                    <div className="w-16 h-3 bg-black/20 rounded-[100%] absolute top-[68px] blur-[2px]"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Column: Reviews */}
                <div className="lg:col-span-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold font-heading text-text-primary">
                            What Our Customers Say
                        </h2>
                        <a href="#" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                            Write a review <span className="text-lg">✎</span>
                        </a>
                    </div>

                    <div className="bg-white rounded-[24px] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10 mb-8 w-full xl:w-11/12">
                        <div className="text-center w-full md:w-auto md:pr-10 md:border-r border-gray-100">
                            <div className="text-6xl font-extrabold font-heading text-text-primary mb-2">4.9</div>
                            <div className="flex justify-center text-primary mb-2 text-xl">
                                {"★".repeat(5).split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm">850 Verified Reviews</p>
                        </div>

                        <div className="w-full flex-1 space-y-3">
                            <div className="flex items-center gap-4 text-sm">
                                <span className="w-3 font-bold text-gray-700">5</span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[92%]"></div>
                                </div>
                                <span className="w-8 text-right text-gray-500 text-xs">92%</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="w-3 font-bold text-gray-700">4</span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-300 rounded-full w-[6%]"></div>
                                </div>
                                <span className="w-8 text-right text-gray-500 text-xs">6%</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="w-3 font-bold text-gray-700">3</span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-200 rounded-full w-[2%]"></div>
                                </div>
                                <span className="w-8 text-right text-gray-500 text-xs">2%</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full xl:w-11/12 mb-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-7 rounded-[24px] shadow-sm border border-gray-100 relative">
                                <div className="absolute top-6 right-6 text-orange-100/50">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <div className="flex text-primary text-sm mb-4">
                                    {"★".repeat(review.rating).split('').map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                                <h4 className="font-bold text-text-primary text-lg mb-2 z-10 relative">
                                    {review.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 z-10 relative">
                                    {review.text}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${review.bgColor || 'bg-gray-100'} flex items-center justify-center text-sm font-bold ${review.bgColor ? 'text-white' : 'text-gray-600'}`}>
                                        {review.initial}
                                    </div>
                                    <div>
                                        <div className="font-bold text-text-primary text-sm">{review.name}</div>
                                        <div className="text-xs text-gray-400">{review.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full xl:w-11/12 flex justify-center">
                        <button className="bg-transparent border border-gray-200 hover:border-gray-300 text-text-primary px-8 py-3 rounded-full font-bold transition-colors duration-200 text-sm shadow-sm transition-shadow">
                            View All Reviews
                        </button>
                    </div>
                </div>

                {/* Right Column: Info Card */}
                <div className="lg:col-span-4 lg:sticky lg:top-8 mt-12 lg:mt-0">
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100 relative">
                        <div className="absolute top-6 right-0 bg-[#00b87c] text-white text-[10px] font-bold px-3 py-1 rounded-l-md tracking-wider uppercase">
                            OPEN NOW
                        </div>

                        <div className="p-8">
                            <h3 className="text-xl font-bold font-heading text-text-primary mb-8">
                                Restaurant Info
                            </h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</div>
                                        <p className="text-text-primary font-medium text-sm leading-relaxed">
                                            Shop 12, Opposite Allen Safalya,<br />
                                            Rajeev Gandhi Nagar, Kota,<br />
                                            Rajasthan 324005
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Opening Hours</div>
                                        <p className="text-text-primary font-medium text-sm">
                                            Mon - Sun <span className="text-primary font-bold ml-1">11:00 AM - 10:00 PM</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Contact Details</div>
                                        <p className="text-text-primary font-bold text-sm mb-0.5">
                                            +91 98765 43210
                                        </p>
                                        <p className="text-gray-400 text-xs">
                                            support@Thapajimomos.in
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-lg font-bold transition-colors shadow-md shadow-orange-500/30 text-sm">
                                    <Navigation2 className="w-4 h-4 fill-white" />
                                    GET DIRECTIONS
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-[#111] hover:bg-black text-white px-6 py-3.5 rounded-lg font-bold transition-colors shadow-md shadow-black/30 text-sm">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                    ORDER ONLINE
                                </button>
                            </div>

                        </div>

                        <div className="bg-gray-50 p-6 flex justify-center gap-6 border-t border-gray-100">
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors text-text-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors text-text-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
