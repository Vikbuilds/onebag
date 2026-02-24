import { useState } from 'react';
import { Box, Upload, Eye, Rotate3d, Palette } from 'lucide-react';
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
                            <Palette size={16} />
                            <span>Visualizer</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                            Visualize your Brand on <br />
                            <span className="italic">Every Street Corner.</span>
                        </h2>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Merchants and brand partners can upload logos and instantly preview how their designs look on OneBag covers using our preview tool.
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
                                    <p className="text-sm text-text-secondary">See realistic renders of your branded bag instantly.</p>
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
                        {/* Wrapper for perspective */}
                        <div className="perspective-1000">
                            {/* Interactive Card Mockup */}
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-white cursor-pointer group hover:shadow-2xl transition-all duration-300 transform-style-3d rotate-y-12">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">

                                    {/* Pure CSS Bag Illustration */}
                                    <motion.div
                                        className="relative w-56 h-72"
                                        animate={isHovering ? { scale: 1.05, rotateZ: 2 } : { scale: 1, rotateZ: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {/* Bag Handle (Back part) */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 border-8 border-[#A68A64] rounded-full clip-half-top transform translate-y-8 z-0 opacity-80"
                                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}>
                                        </div>

                                        {/* Bag Body */}
                                        <div className="absolute inset-0 bg-[#E3D5CA] rounded-sm shadow-lg z-10 overflow-hidden border-t-2 border-[#fff]/20">
                                            {/* Noise Texture Overlay */}
                                            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply pointer-events-none"></div>

                                            {/* Side Folds / Depth Gradients */}
                                            <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/5 to-transparent"></div>
                                            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/5 to-transparent"></div>
                                            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/5 to-transparent"></div>

                                            {/* Branding Area */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-[#3A3A3A] mix-blend-multiply opacity-90">
                                                <div className="border-4 border-current px-6 py-4 mb-3">
                                                    <span className="font-serif font-bold text-3xl tracking-tighter text-center block leading-none">YOUR<br />BRAND</span>
                                                </div>
                                                <span className="text-xs font-bold tracking-[0.2em] uppercase">Est. 2024</span>
                                            </div>

                                            {/* OneBag Tag */}
                                            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 opacity-70 mix-blend-multiply">
                                                <div className="w-3 h-3 bg-primary rounded-[1px]"></div>
                                                <span className="text-[10px] font-bold text-primary">OneBag</span>
                                            </div>
                                        </div>

                                        {/* Bag Handle (Front part) */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 border-8 border-[#Cfb187] rounded-full clip-half-top transform translate-y-8 z-20"
                                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}>
                                        </div>
                                    </motion.div>

                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-primary border border-gray-200 shadow-sm">
                                        Vector Preview
                                    </div>

                                    <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-text-secondary opacity-50">
                                        Hover to zoom
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Box size={20} className="text-gray-500" />
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold text-gray-800">Classic Kraft</div>
                                            <div className="text-gray-500">Recycled Paper • 120gsm</div>
                                        </div>
                                    </div>
                                    <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-light transition-colors">
                                        <Rotate3d size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
