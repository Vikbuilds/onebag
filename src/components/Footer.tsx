import { Logo } from './Logo';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-secondary-light pt-20 pb-10">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Logo variant="light" className="mb-6" />
                        <p className="text-secondary-light/70 max-w-sm text-lg leading-relaxed">
                            Reimagining retail packaging with sustainability and technology at the core.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif italic tracking-wide">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">About OneBag</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif italic tracking-wide">Connect</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="flex items-center hover:text-white transition-colors"><Mail size={18} className="mr-2" /> Contact Us</a></li>
                            <li className="flex gap-4 pt-2">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-light/50">
                    <p>&copy; {new Date().getFullYear()} OneBag. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
