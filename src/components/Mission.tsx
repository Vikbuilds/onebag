import { motion } from 'framer-motion';
import { Heart, Target } from 'lucide-react';

export function Mission() {
    return (
        <section className="section-padding bg-background-alt">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/20"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <Heart size={24} />
                        </div>
                        <h3 className="text-3xl font-serif mb-4 text-primary">Our <span className="italic">Mission</span></h3>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            To humanize advertising, repair broken feedback loops, and create a fair value exchange for consumer attention — transforming packaging from a passive utility into an active commerce infrastructure.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-primary p-8 rounded-3xl shadow-sm text-white"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                            <Target size={24} />
                        </div>
                        <h3 className="text-3xl font-serif mb-4">Our <span className="italic">Vision</span></h3>
                        <p className="text-lg text-white/80 leading-relaxed">
                            To build a world where every physical commerce interaction is a meaningful digital connection — starting with the humble carry bag.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
