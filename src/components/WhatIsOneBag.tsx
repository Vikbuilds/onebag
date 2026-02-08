import { motion } from 'framer-motion';

export function WhatIsOneBag() {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                            Not just a bag. <br />
                            <span className="italic">A Platform.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            OneBag transforms single-use packaging into a <strong className="text-primary font-medium">digital touchpoint</strong>, helping merchants save costs and brands reach real customers.
                        </p>
                        <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
                            <p>
                                OneBag is a <span className="text-primary font-semibold">packaging support and retail enablement platform</span> designed for everyday commerce.
                            </p>
                            <p>
                                We provide shops with durable, reusable carry bags at low or subsidized cost—funded by brand partners.
                            </p>
                            <p>
                                Beyond packaging, OneBag helps shops build a simple online presence using <span className="text-primary font-semibold">QR-enabled bags</span> that connect customers directly to their store information.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
