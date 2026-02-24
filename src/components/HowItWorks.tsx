import { motion } from 'framer-motion';

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: <span>Brands <span className="italic">Sponsor</span></span>,
            desc: "Brands sponsor high-quality reusable OneBag covers with their messaging."
        },
        {
            num: "02",
            title: <span>Merchants <span className="italic">Distribute</span></span>,
            desc: "Shops receive bags at subsidized rates and give them to customers."
        },
        {
            num: "03",
            title: <span>Customers <span className="italic">Reuse</span></span>,
            desc: "Shoppers reuse the durable bags for daily errands, extending reach."
        },
        {
            num: "04",
            title: <span>Everyone <span className="italic">Wins</span></span>,
            desc: "Shops save money, brands get visibility, consumers get value for their attention and plastic waste is reduced."
        }
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif text-primary mb-4 leading-tight"
                    >
                        How <span className="italic">OneBag</span> Works
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-6 pt-12 rounded-2xl bg-white border border-secondary/20 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="absolute -top-6 left-6 text-6xl font-bold text-secondary/20 font-serif">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary relative z-10">{step.title}</h3>
                            <p className="text-text-secondary relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
