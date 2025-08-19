import Image from "next/image";

const EducationHistory = () => {
	const educationHistory = [
		{
			period: "2024年4月〜2026年3月（予定）",
			title: "京都工芸繊維大学大学院 博士前期課程",
			description: "工芸科学科 / 設計工学域 / 情報工学専攻",
			image: {
				src: "/image/resume/kit.jpg",
				width: 1030,
				height: 615,
			},
		},
		{
			period: "2020年4月〜2024年3月",
			title: "京都工芸繊維大学 学士課程",
			description: "工芸科学科 / 設計工学域 / 情報工学課程",
			image: {
				src: "/image/resume/kit.jpg",
				width: 1030,
				height: 615,
			},
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h3 className="text-2xl font-semibold text-gray-900 mb-2">Education</h3>
			<ol className="relative border-s border-blue-200">
				{educationHistory.map((entry) => (
					<li key={entry.period} className="mb-4 ms-4">
						<div className="absolute w-3 h-3 bg-blue-300 rounded-full mt-1.5 -start-1.5"></div>
						<time className="text-sm font-normal leading-none text-gray-500">
							{entry.period}
						</time>
						<div className="flex items-center gap-6 mt-1">
							<div className="flex-shrink-0">
								<Image
									src={entry.image.src}
									alt={entry.title}
									width={entry.image.width}
									height={entry.image.height}
									className="w-30 h-30 object-contain"
								/>
							</div>
							<div className="flex-1 flex flex-col justify-center">
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									{entry.title}
								</h4>
								<p className="text-base font-normal text-gray-700 whitespace-pre-line">
									{entry.description}
								</p>
							</div>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default EducationHistory;
