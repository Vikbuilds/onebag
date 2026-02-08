import { ShoppingBag, Store } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-background-alt">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-20 -translate-x-20" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-[1.1]">
                            Smarter Packaging for <br />
                            <span className="italic font-light">Modern Retail.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 font-light">
                            Premium, eco-friendly carry bags that <span className="italic font-serif text-primary">connect</span> offline shoppers to your online world.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <button className="btn-primary w-full sm:w-auto hover:scale-105 transition-transform">
                            <Store className="w-5 h-5 mr-2" />
                            Get Early Access
                        </button>
                        <button className="btn-secondary w-full sm:w-auto hover:scale-105 transition-transform">
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            Partner with OneBag
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center justify-center gap-8 text-sm font-medium text-text-secondary/80"
                    >
                        <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            Reusable bags
                        </span>
                        <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            QR-powered shop pages
                        </span>
                        <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            Built for real stores
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
