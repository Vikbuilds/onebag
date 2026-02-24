export interface Shop {
    id: string;
    created_at: string;
    owner_id: string;
    name: string;
    slug: string;
    description: string | null;
    logo_url: string | null;
    address: string | null;
    google_maps_link: string | null;
    website_url: string | null;
    phone_number: string | null;
    cover_image_url: string | null;
    business_category: string | null;
}
