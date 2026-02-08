import { ShoppingBag, ScanLine, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function QRExperience() {
    const steps = [
        {
            icon: <ShoppingBag size={32} />,
            title: "Receive Bag",
            desc: "Customer gets a OneBag at checkout"
        },
        {
            icon: <ScanLine size={32} />,
            title: "Scan QR",
            desc: "They scan the code on the bag"
        },
        {
            icon: <Smartphone size={32} />,
            title: "Visit Profile",
            desc: "Instant access to your shop page"
        },
        {
            icon: <ArrowRight size={32} />,
            title: "Stay Connected",
            desc: "Retain customers beyond the store"
        }
    ];

    return (
        <section className="section-padding bg-background-alt">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4 leading-tight">
                            From Checkout Counter to <span className="italic">Customer’s Phone</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Bridge the gap between offline sales and digital engagement effortlessly.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-[20%] left-[12%] right-[12%] h-0.5 bg-secondary/30 border-t-2 border-dashed border-secondary/50 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-primary border-4 border-background-alt mb-6 transition-transform hover:scale-110 duration-300">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-primary">{step.title}</h3>
                            <p className="text-text-secondary">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
