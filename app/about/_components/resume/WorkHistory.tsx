import Image from "next/image";

const WorkHistory = () => {
	const workHistory = [
		{
			period: "2025年8月中旬〜2025年10月中旬",
			title: "株式会社スリーシェイク",
			description: "期限付きインターンシップ",
			image: {
				src: "/image/resume/3shake.png",
				width: 400,
				height: 400,
			},
		},
		{
			period: "2024年9月上旬〜2024年9月中旬",
			title: "株式会社オプティム",
			description: "SUMMER INTERNSHIP 2024 バックエンドエンジニア",
			image: {
				src: "/image/resume/optim.jpg",
				width: 1200,
				height: 601,
			},
		},
		{
			period: "2024年8月中旬〜2024年8月下旬",
			title: "株式会社Speee",
			description: "01立ち上げ12daysインターンシップ",
			image: {
				src: "/image/resume/speee.jpg",
				width: 400,
				height: 400,
			},
		},
		{
			period: "2022年9月〜2022年11月",
			title: "株式会社アックス",
			description: "短期アルバイト",
			image: {
				src: "/image/resume/axe.jpg",
				width: 300,
				height: 152,
			},
		},
		{
			period: "2020年4月〜2024年4月",
			title: "京進スクール・ワン",
			description: "塾講師",
			image: {
				src: "/image/resume/kyoshin.png",
				width: 335,
				height: 150,
			},
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h3 className="text-2xl font-semibold text-gray-900 mb-2">Work</h3>
			<ol className="relative border-s border-blue-200">
				{workHistory.map((entry) => (
					<li key={entry.period} className="mb-4 ms-4">
						<div className="absolute w-3 h-3 bg-blue-300 rounded-full mt-1.5 -start-1.5"></div>
						<time className="text-sm font-normal leading-none text-gray-500">
							{entry.period}
						</time>
						<div className="flex items-center gap-6">
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

export default WorkHistory;
