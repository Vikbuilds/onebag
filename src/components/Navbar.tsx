import { useState, useEffect } from 'react';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { clsx } from 'clsx';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
        setIsMobileMenuOpen(false);
    };

    // Handle scroll after navigation
    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const id = (location.state as any).scrollTo;
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                // Clear state
                window.history.replaceState({}, document.title);
            }
        }
    }, [location]);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link to="/">
                    <Logo />
                </Link>

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

                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link
                                to="/dashboard"
                                className="font-medium text-primary hover:text-primary-light flex items-center gap-2"
                            >
                                <LayoutDashboard size={18} />
                                Dashboard
                            </Link>
                            <button
                                onClick={handleSignOut}
                                className="btn-primary flex items-center gap-2"
                            >
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/auth"
                            className="btn-primary"
                        >
                            Login / Sign Up
                        </Link>
                    )}
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

                    {user ? (
                        <>
                            <Link
                                to="/dashboard"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-left font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-primary"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleSignOut}
                                className="btn-primary w-full text-center flex items-center justify-center gap-2"
                            >
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/auth"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary w-full text-center"
                        >
                            Login / Sign Up
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
}
