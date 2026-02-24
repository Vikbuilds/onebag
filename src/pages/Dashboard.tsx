import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../integrations/supabase/client';
import type { Shop } from '../types';
import { Loader2, ExternalLink, QrCode as QrIcon, MapPin, ImageIcon, Store, Save, Upload, X } from 'lucide-react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

export function Dashboard() {
    const { user } = useAuth();
    const [shop, setShop] = useState<Shop | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Form state
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [googleMapsLink, setGoogleMapsLink] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [businessCategory, setBusinessCategory] = useState('');

    // Upload state
    const [uploading, setUploading] = useState(false);

    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (!user) return;

        const fetchShop = async () => {
            try {
                const { data, error } = await supabase
                    .from('shops')
                    .select('*')
                    .eq('owner_id', user.id)
                    .single();

                if (error && error.code !== 'PGRST116') {
                    console.error('Error fetching shop:', error);
                }

                if (data) {
                    setShop(data);
                    // Populate form
                    setName(data.name);
                    setSlug(data.slug);
                    setDescription(data.description || '');
                    setAddress(data.address || '');
                    setGoogleMapsLink(data.google_maps_link || '');
                    setWebsiteUrl(data.website_url || '');
                    setPhoneNumber(data.phone_number || '');
                    setCoverImageUrl(data.cover_image_url || '');
                    setBusinessCategory(data.business_category || '');
                } else {
                    setIsEditing(true); // Default to editing mode if no shop exists (creation mode)
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchShop();
    }, [user]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            setError(null);

            if (!e.target.files || e.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = e.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${user?.id}/${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('shop-assets')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage.from('shop-assets').getPublicUrl(filePath);
            setCoverImageUrl(data.publicUrl);

        } catch (error: any) {
            setError(error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSaveShop = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);

        try {
            const shopData = {
                owner_id: user?.id,
                name,
                slug,
                description,
                address,
                google_maps_link: googleMapsLink,
                website_url: websiteUrl,
                phone_number: phoneNumber,
                cover_image_url: coverImageUrl,
                business_category: businessCategory
            };

            let data, error;

            if (shop) {
                // Update
                const response = await supabase
                    .from('shops')
                    .update(shopData)
                    .eq('id', shop.id)
                    .select()
                    .single();
                data = response.data;
                error = response.error;
            } else {
                // Insert
                const response = await supabase
                    .from('shops')
                    .insert([shopData])
                    .select()
                    .single();
                data = response.data;
                error = response.error;
            }

            if (error) throw error;

            setShop(data);
            setIsEditing(false);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 px-4 flex justify-center">
                <Loader2 className="animate-spin text-primary" size={32} />
            </div>
        );
    }

    const shopUrl = shop ? `${window.location.origin}/shop/${shop.slug}` : '';

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 container-custom">
            <h1 className="text-3xl font-serif text-primary mb-2">Merchant Dashboard</h1>
            <p className="text-text-secondary mb-8">Manage your shop presence and campaigns</p>

            {/* Shop Configuration Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-6">

                    {/* View Mode */}
                    {!isEditing && shop && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative group">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="absolute top-6 right-6 text-sm text-primary hover:text-primary-light font-medium border border-primary/20 px-3 py-1 rounded-full hover:bg-primary/5 transition-colors"
                            >
                                Edit Profile
                            </button>

                            <div className="flex items-start gap-6">
                                {shop.cover_image_url && (
                                    <img
                                        src={shop.cover_image_url}
                                        alt={shop.name}
                                        className="w-24 h-24 object-cover rounded-lg border border-gray-100"
                                    />
                                )}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{shop.name}</h2>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                        {shop.business_category && (
                                            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-700">
                                                <Store size={14} /> {shop.business_category}
                                            </span>
                                        )}
                                        {shop.address && (
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} /> {shop.address}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{shop.description}</p>

                                    <div className="flex gap-4">
                                        <Link to={`/shop/${shop.slug}`} target="_blank" className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                                            View Live Page <ExternalLink size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit/Create Mode */}
                    {isEditing && (
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {shop ? 'Edit Shop Profile' : 'Create Your Shop'}
                                </h2>
                                {shop && (
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="text-gray-500 hover:text-gray-700 text-sm"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>

                            {error && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm flex items-center gap-2">
                                    <span className="font-bold">Error:</span> {error}
                                </div>
                            )}

                            <form onSubmit={handleSaveShop} className="space-y-6">
                                {/* Basic Info */}
                                <div className="space-y-4 pb-6 border-b border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Basic Info</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    if ((!slug || slug === name.toLowerCase().replace(/\s+/g, '-')) && !shop) {
                                                        setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
                                                    }
                                                }}
                                                className="input-field"
                                                placeholder="e.g. Burger Haven"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Unique URL Slug</label>
                                            <input
                                                type="text"
                                                required
                                                value={slug}
                                                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))}
                                                className="input-field font-mono text-sm"
                                                placeholder="burger-haven"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                            <input
                                                type="text"
                                                value={businessCategory}
                                                onChange={(e) => setBusinessCategory(e.target.value)}
                                                className="input-field"
                                                placeholder="e.g. Restaurant, Retail, Cafe"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                rows={3}
                                                className="input-field"
                                                placeholder="Tell us about your business..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Location & Contact */}
                                <div className="space-y-4 pb-6 border-b border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                        <MapPin size={16} /> Location & Contact
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                            <input
                                                type="text"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                className="input-field"
                                                placeholder="123 Main St, City, Country"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Google Maps Link</label>
                                            <input
                                                type="url"
                                                value={googleMapsLink}
                                                onChange={(e) => setGoogleMapsLink(e.target.value)}
                                                className="input-field"
                                                placeholder="https://maps.google.com/..."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                                            <input
                                                type="url"
                                                value={websiteUrl}
                                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                                className="input-field"
                                                placeholder="https://yourwebsite.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="input-field"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Visuals */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                        <ImageIcon size={16} /> Visuals
                                    </h3>

                                    <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-colors bg-gray-50/50">
                                        {coverImageUrl ? (
                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden group/image">
                                                <img
                                                    src={coverImageUrl}
                                                    alt="Cover Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setCoverImageUrl('')}
                                                    className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-gray-100 text-gray-400">
                                                    {uploading ? (
                                                        <Loader2 className="animate-spin" size={24} />
                                                    ) : (
                                                        <Upload size={24} />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {uploading ? 'Uploading...' : 'Click to Upload Cover Image'}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                                                </div>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    disabled={uploading}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-end gap-3">
                                    {shop && (
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="btn-primary py-2 px-6 flex items-center gap-2"
                                    >
                                        {saving ? <Loader2 className="animate-spin" size={18} /> : (
                                            <>
                                                <Save size={18} /> {shop ? 'Save Changes' : 'Create Shop'}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {shop && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <QrIcon size={20} className="text-primary" />
                                Shop QR Code
                            </h3>
                            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-200 flex justify-center mb-4">
                                <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                                    <QRCode
                                        size={256}
                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                        value={shopUrl}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div>
                            </div>
                            <button className="w-full btn-secondary py-2 text-sm">
                                Download SVG
                            </button>
                        </div>
                    )}

                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                        <h3 className="font-bold text-primary mb-2">Pro Tip</h3>
                        <p className="text-sm text-gray-600">
                            Add a Google Maps link and high-quality cover image to increase trust with your customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
