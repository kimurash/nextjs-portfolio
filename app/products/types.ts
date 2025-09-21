export type ProductCategory = "all" | "app" | "bot";

export interface Product {
	id: string;
	title: string;
	images: string[];
	category: ProductCategory[];
	technologies: string[];
	description: string[];
	links: ProductLink[];
}

export interface Technology {
	name: string;
	textColor: string;
	borderColor: string;
}

export interface ProductLink {
	name: string;
	url: string;
	backgroundColor: string;
}
