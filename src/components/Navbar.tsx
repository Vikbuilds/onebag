import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { clsx } from 'clsx';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('merchants')} className="text-text-primary hover:text-primary-light font-medium transition-colors">
                        For Merchants
                    </button>
                    <button onClick={() => scrollToSection('brands')} className="text-text-primary hover:text-primary-light font-medium transition-colors">
                        For Brands
                    </button>
                    <button onClick={() => scrollToSection('features')} className="text-text-primary hover:text-primary-light font-medium transition-colors">
                        Features
                    </button>
                    <button
                        onClick={() => scrollToSection('waitlist')}
                        className="btn-primary"
                    >
                        Get Early Access
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-gray-100 p-4 flex flex-col gap-4 animate-fade-in">
                    <button onClick={() => scrollToSection('merchants')} className="text-left font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
                        For Merchants
                    </button>
                    <button onClick={() => scrollToSection('brands')} className="text-left font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
                        For Brands
                    </button>
                    <button onClick={() => scrollToSection('features')} className="text-left font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
                        Features
                    </button>
                    <button
                        onClick={() => scrollToSection('waitlist')}
                        className="btn-primary w-full"
                    >
                        Get Early Access
                    </button>
                </div>
            )}
        </nav>
    );
}
