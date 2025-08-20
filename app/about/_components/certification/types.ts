export type CertificationCardHeaderColor =
	| "blue"
	| "cyan"
	| "emerald"
	| "purple"
	| "yellow";

export interface Certification {
	title: string;
	issuer: string;
	acquiredAt: string;
	expiresAt?: string;
	color: CertificationCardHeaderColor;
	icon: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
}
