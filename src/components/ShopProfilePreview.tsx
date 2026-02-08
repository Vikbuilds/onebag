import { MapPin, Globe, Phone, Clock, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ShopProfilePreview() {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Phone Mockup Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1 flex justify-center"
                    >
                        <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-white flex flex-col">
                                {/* Header Image */}
                                <div className="h-32 bg-primary/10 w-full relative">
                                    <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/30 flex items-center justify-center text-2xl">🏪</div>
                                </div>

                                <div className="mt-10 px-4">
                                    <h3 className="font-bold text-lg text-gray-900">Sharma General Store</h3>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <MapPin size={12} className="mr-1" />
                                        <span>HSR Layout, Bangalore</span>
                                    </div>

                                    <div className="flex gap-2 mt-4">
                                        <button className="flex-1 bg-primary text-white text-xs py-2 rounded-full font-medium">Contact</button>
                                        <button className="flex-1 border border-gray-200 text-gray-600 text-xs py-2 rounded-full font-medium">Directions</button>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                                            <span className="text-xs font-bold text-green-800 block mb-1">Weekly Offer</span>
                                            <p className="text-xs text-green-700">10% OFF on all organic pulses this week!</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <h4 className="text-xs font-bold mb-2">Store Info</h4>
                                        <div className="space-y-2 text-xs text-gray-600">
                                            <div className="flex items-center gap-2"><Clock size={12} /> 9:00 AM - 9:30 PM</div>
                                            <div className="flex items-center gap-2"><Phone size={12} /> +91 98765 43210</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                            Your Shop, <span className="italic">Online</span> — Instantly
                        </h2>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            With OneBag, every merchant gets a simple digital profile page that customers can access by scanning a QR code on the bag.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Zero Technical Setup</h4>
                                    <p className="text-text-secondary">No website builder, no hosting fees. Just sign up and your page is ready.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <Share2 size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Easy Updates</h4>
                                    <p className="text-text-secondary">Post offers, announcements, or holiday hours from your mobile.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <Star size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Direct Feedback</h4>
                                    <p className="text-text-secondary">Let customers contact you directly via WhatsApp or call.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
