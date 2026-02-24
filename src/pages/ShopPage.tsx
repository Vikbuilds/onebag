import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import type { Shop } from '../types';
import { MapPin, Phone, Globe, Clock, Navigation, Loader2, ShoppingBag, ArrowRight } from 'lucide-react';

export function ShopPage() {
    const { slug } = useParams<{ slug: string }>();
    const [shop, setShop] = useState<Shop | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const { data, error } = await supabase
                    .from('shops')
                    .select('*')
                    .eq('slug', slug)
                    .single();

                if (error) throw error;
                setShop(data);
            } catch (err) {
                console.error('Error fetching shop:', err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchShop();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <Loader2 className="animate-spin text-primary" size={32} />
            </div>
        );
    }

    if (!shop) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center pt-20">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h1 className="text-xl font-bold text-gray-900 mb-2">Shop Not Found</h1>
                    <p className="text-gray-500 mb-6">The shop you're looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="btn-primary inline-flex">Go to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-12">

            <div className="container-custom px-4">

                {/* 1. HERO CARD Section */}
                <div className="relative w-full h-[60vh] min-h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-8 group">
                    {/* Background Image */}
                    <img
                        src={shop.cover_image_url || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop'}
                        alt={shop.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

                            {/* Left Side: Shop Info */}
                            <div className="max-w-3xl">
                                {shop.business_category && (
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wider">
                                            {shop.business_category}
                                        </span>
                                        <span className="flex items-center gap-1 text-green-400 text-xs font-medium px-2 py-0.5 bg-green-900/40 rounded-full border border-green-500/30">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                            Open Now
                                        </span>
                                    </div>
                                )}

                                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight leading-none text-white">
                                    {shop.name}
                                </h1>

                                {shop.description && (
                                    <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed line-clamp-2 max-w-2xl">
                                        {shop.description}
                                    </p>
                                )}
                            </div>

                            {/* Right Side: Primary CTA */}
                            <div className="shrink-0 flex gap-4">
                                {shop.phone_number && (
                                    <a
                                        href={`tel:${shop.phone_number}`}
                                        className="h-14 w-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all"
                                    >
                                        <Phone size={24} />
                                    </a>
                                )}
                                {shop.address && (
                                    <a
                                        href={shop.google_maps_link || `https://maps.google.com/?q=${encodeURIComponent(shop.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-14 w-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all"
                                    >
                                        <Navigation size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. INFO BAR Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Card 1: Location */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{shop.address || 'Location not specified'}</p>
                        </div>
                    </div>

                    {/* Card 2: Contact */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                            <Globe size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Online</h3>
                            <div className="flex flex-col gap-1 text-sm">
                                {shop.website_url ? (
                                    <a href={shop.website_url} target="_blank" className="text-primary hover:underline truncate">
                                        {new URL(shop.website_url).hostname}
                                    </a>
                                ) : (
                                    <span className="text-gray-400">No website</span>
                                )}
                                <span className="text-gray-500">{shop.phone_number || 'No phone'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Hours/Share */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                <p className="text-gray-600 text-sm">9:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CONTENT Section */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Active Campaigns</h2>
                    <Link to="#" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                        View all <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-16 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag className="text-gray-300" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Campaigns</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mb-8">
                        This shop hasn't launched any campaigns yet. Subscribe to get notified when they do.
                    </p>
                    <button className="btn-primary">
                        Notify Me
                    </button>
                </div>

            </div>
        </div>
    );
}
