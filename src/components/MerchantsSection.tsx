import { Check, Store, Smartphone, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

export function MerchantsSection() {
    const benefits = [
        "Durable, reusable carry bags at low or subsidized cost",
        "No repeated spending on disposable packaging",
        "Better checkout experience for customers",
        "Regulation-compliant alternative to single-use bags",
        "Simple supply model, ready to use"
    ];

    return (
        <section id="merchants" className="section-padding bg-background-alt relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-primary font-medium text-sm mb-6">
                            <Store size={16} />
                            <span>For Merchants / Vendors</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                            Built for <span className="italic">Retail Shops</span>
                        </h2>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Retail shops spend money every day on disposable or regulation-compliant carry bags. OneBag removes that recurring burden and adds more value.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[20px] h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-text-primary font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-secondary/20 relative"
                    >
                        <div className="absolute -top-4 -right-4 bg-secondary text-primary px-4 py-2 rounded-full font-bold shadow-lg transform rotate-3">
                            Coming Soon
                        </div>

                        <h3 className="text-2xl font-serif font-bold mb-6 text-primary border-b border-gray-100 pb-4">
                            The OneBag <span className="italic">Platform</span>
                        </h3>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                    <Store size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Shop Profile Page</h4>
                                    <p className="text-sm text-text-secondary">Create your own digital presence instantly.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Unique Shop Link</h4>
                                    <p className="text-sm text-text-secondary">Get a custom URL (e.g., onebag.shop/yourstore)</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                    <QrCode size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Smart QR Codes</h4>
                                    <p className="text-sm text-text-secondary">Receive QR codes to place on bags and at checkout.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
