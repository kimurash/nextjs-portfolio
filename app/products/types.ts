export type ProductCategory = "all" | "app" | "bot";

export interface Product {
	id: string;
	title: string;
	image: string;
	category: ProductCategory[];
	technologies: string[];
	description: string[];
}

export interface Technology {
	name: string;
	textColor: string;
	borderColor: string;
}
