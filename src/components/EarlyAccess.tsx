import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function EarlyAccess() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate form submission
    };

    return (
        <section id="waitlist" className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-secondary/10 rounded-[3rem] p-8 md:p-16 text-center border border-secondary/20"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                        Join the <span className="italic">Movement.</span> <br />
                        Transform your Packaging.
                    </h2>
                    <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                        We’re onboarding merchants and brand partners in select locations. Secure your spot today.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                                <input
                                    type="text"
                                    placeholder="City"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Phone or Email"
                                required
                                className="w-full px-6 py-4 rounded-xl bg-white border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <select className="w-full px-6 py-4 rounded-xl bg-white border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 text-text-secondary">
                                <option value="" disabled selected>I am a...</option>
                                <option value="merchant">Merchant / Shop Owner</option>
                                <option value="brand">Brand / Advertiser</option>
                                <option value="other">Other</option>
                            </select>

                            <button type="submit" className="w-full btn-primary text-lg group">
                                Get Early Access
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 rounded-2xl inline-block shadow-sm"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">You're on the list!</h3>
                            <p className="text-text-secondary">We'll be in touch shortly.</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
