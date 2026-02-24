import { Megaphone, Users, MapPin, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function BrandsSection() {
    const benefits = [
        {
            icon: <Megaphone className="w-6 h-6" />,
            title: <span className="font-serif">Mobile <span className="italic">Billboards</span></span>,
            desc: "Your brand travels from the store to homes, streets, and offices."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: <span className="font-serif"><span className="italic">Household</span> Reach</span>,
            desc: "Repeated impressions every time the reusable bag is used."
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: <span className="font-serif"><span className="italic">Hyperlocal</span> Targeting</span>,
            desc: "Reach customers in specific neighborhoods through local shops."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: <span className="font-serif"><span className="italic">Cost</span> Effective</span>,
            desc: "Lower CPM compared to digital ads with higher physical engagement."
        }
    ];

    return (
        <section id="brands" className="section-padding bg-primary text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 text-sm font-medium">
                            For Brands / Advertisers
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            The New <span className="italic">Out-of-Home</span> <br /> Advertising Medium.
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            <strong className="font-bold underline italic">One</strong> <strong className="font-bold">Bag</strong> converts everyday retail movement into contextual, performance-driven visibility — reducing wasted spend on skipped digital ads and enabling measurable engagement and structured feedback.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            {/* Italicize key words in feature titles */}
                            <h3 className="text-xl font-bold mb-3 text-white/90">{item.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="btn-secondary bg-white text-primary border-white hover:bg-gray-100 hover:text-primary">
                        Start a Campaign
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
}
