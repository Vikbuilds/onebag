import { useState } from 'react';
import { Box, Upload, Eye, Rotate3d } from 'lucide-react';
import { motion } from 'framer-motion';

export function BrandPreview() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                            <Rotate3d size={16} />
                            <span>Coming Soon</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                            Visualize your Brand on <br />
                            <span className="italic">Every Street Corner.</span>
                        </h2>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Merchants and brand partners can upload logos and instantly preview how their designs look on OneBag covers using our 3D preview tool.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-primary shrink-0">
                                    <Upload size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Upload Assets</h4>
                                    <p className="text-sm text-text-secondary">Drag and drop your logo and branding elements.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-primary shrink-0">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Instant Preview</h4>
                                    <p className="text-sm text-text-secondary">See realistic 3D renders of your branded bag instantly.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {/* Interactive Card Mockup */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-white cursor-pointer group">
                            <div className="aspect-square bg-white rounded-2xl shadow-inner flex items-center justify-center relative overflow-hidden">
                                {/* Simulated 3D Bag */}
                                <motion.div
                                    animate={isHovering ? { rotateY: 180 } : { rotateY: 0 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="w-48 h-56 bg-secondary relative rounded-sm shadow-lg mb-4"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center border-2 border-primary/20 rounded-sm bg-secondary">
                                        <span className="font-serif font-bold text-primary text-xl opacity-80">YOUR BRAND</span>
                                    </div>
                                    {/* Handle */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-12 border-4 border-secondary rounded-t-full border-b-0" />
                                </motion.div>

                                <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-text-secondary opacity-50">
                                    Hover to rotate
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Box size={20} className="text-gray-500" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-bold text-gray-800">Tote Bag - Medium</div>
                                        <div className="text-gray-500">Canvas material</div>
                                    </div>
                                </div>
                                <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-light transition-colors">
                                    <Rotate3d size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
