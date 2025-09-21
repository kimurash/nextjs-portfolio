export type ProductCategory = "all" | "app" | "bot";

export interface Technology {
	name: string;
	textColor: string;
	borderColor: string;
}

export interface Product {
	id: string;
	title: string;
	images: ProductImage[];
	category: ProductCategory[];
	technologies: string[];
	description: string[];
	links: ProductLink[];
}

export interface ProductImage {
	src: string;
	width: number;
	height: number;
}

export interface ProductLink {
	name: string;
	url: string;
	backgroundColor: string;
}
