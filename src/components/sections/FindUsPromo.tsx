import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function FindUsPromo() {
    return (
        <section className="py-20 w-full max-w-[1440px] mx-auto px-6 font-sans">
            <div className="w-full h-[450px] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-lg">

                {/* Left Side: Dark Info Panel */}
                <div className="w-full md:w-5/12 bg-[#221c17] p-12 lg:p-16 flex flex-col justify-center text-left">
                    <h2 className="text-4xl font-extrabold font-heading text-white mb-4">
                        Find us in Kota
                    </h2>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-10 max-w-sm">
                        Visit us at our flagship outlet in Kota for the freshest experience right off the steamer.
                    </p>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed pt-1">
                                Shop 42, Talwandi, Kota, Rajasthan
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-gray-300 text-sm">
                                +91 98765-43210
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/location"
                        className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-bold transition-colors duration-200 text-sm w-max shadow-lg shadow-orange-500/20"
                    >
                        Get Directions
                    </Link>
                </div>

                {/* Right Side: Map Image */}
                <div className="w-full md:w-7/12 relative h-full min-h-[300px] bg-[#e5e7eb] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/map-light.png"
                        alt="Store Location Map"
                        fill
                        className="object-cover object-center opacity-80 mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 mix-blend-multiply opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_0_8px_rgba(234,88,12,0.2)] animate-pulse"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
