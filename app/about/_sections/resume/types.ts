export interface EducationExperience {
	period: string;
	title: string;
	description: string;
	image: {
		src: string;
		width: number;
		height: number;
	};
}

export interface WorkExperience {
	period: string;
	title: string;
	description: string;
	url?: string;
	image: {
		src: string;
		width: number;
		height: number;
	};
}
