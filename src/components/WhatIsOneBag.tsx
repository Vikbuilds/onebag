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
                            The Intelligent <br />
                            <span className="italic">Engagement Layer.</span>
                        </h2>
                        <div className="space-y-8 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            <p className="text-primary font-medium italic">
                                <strong className="font-bold underline italic">One</strong> <strong className="font-bold">Bag</strong> transforms everyday carry bags into intelligent engagement touchpoints that connect brands, merchants, and consumers in a measurable, contextual way.
                            </p>
                            <p>
                                Not just packaging, nor just advertising — <strong className="font-bold underline italic">One</strong> <strong className="font-bold">Bag</strong> is the infrastructure layer bridging the gap between offline commerce and digital engagement.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 pt-8 text-left">
                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                    <h3 className="font-serif text-primary text-2xl mb-3">For <strong className="font-bold underline italic">Brands</strong></h3>
                                    <p className="text-base text-text-secondary">Converts everyday retail movement into contextual, performance-driven visibility — reducing wasted spend on skipped digital ads and enabling measurable engagement and structured feedback.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                                    <h3 className="font-serif text-primary text-2xl mb-3">For <strong className="font-bold underline italic">Merchants</strong></h3>
                                    <p className="text-base text-text-secondary">Turns packaging into a strategic asset — lowering costs through sponsored placements, enabling self-branding, and unlocking insights through integrated feedback tools.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                    <h3 className="font-serif text-primary text-2xl mb-3">For <strong className="font-bold underline italic">Consumers</strong></h3>
                                    <p className="text-base text-text-secondary">Replaces intrusive ads with relevant, contextual experiences — offering transparency, rewards, and a voice through structured feedback.</p>
                                </div>
                            </div>

                            <p className="pt-8 text-base">
                                Overall, <strong className="font-bold underline italic">One</strong> <strong className="font-bold">Bag</strong> aims to humanize advertising, repair broken feedback loops, and create a fair value exchange for consumer attention — transforming packaging from a passive utility into an active commerce infrastructure.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
