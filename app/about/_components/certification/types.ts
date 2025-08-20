export interface Certification {
	title: string;
	issuer: string;
	acquiredAt: string;
	expiresAt?: string;
	color: string;
	icon: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
}
