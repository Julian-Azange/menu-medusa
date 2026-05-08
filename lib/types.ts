export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category?: string;
    type?: string; // Ej: "Popular", "Picante", "Veggie"
    note?: string;
}

export interface Category {
    id: string;
    label: string;
    icon?: string;
}

export interface MenuData {
    categories: Category[];
    items: Record<string, MenuItem[]>;
}