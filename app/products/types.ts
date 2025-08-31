export interface Product {
	id: string;
	title: string;
	image: string;
	technologies: string[];
	description: string[];
}

export interface Technology {
	name: string;
	textColor: string;
	borderColor: string;
}
