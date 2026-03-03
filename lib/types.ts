export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    type?: string; // El signo '?' hace que 'type' sea opcional
    note?: string; // 'note' también es opcional
}

export interface MenuCategory {
    id: string;
    label: string;
}

export interface MenuData {
    categories: MenuCategory[];
    items: {
        cocteles: MenuItem[];
        comidas: MenuItem[];
        licores: MenuItem[];
        bebidas: MenuItem[];
    };
}