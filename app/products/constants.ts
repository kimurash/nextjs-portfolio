import type { Product, ProductCategory, Technology } from "./types";

export const productCategories: ProductCategory[] = ["all", "app", "bot"];

export const technologies: Record<string, Technology> = {
	typescript: {
		name: "TypeScript",
		textColor: "text-blue-500",
		borderColor: "border-blue-500",
	},
	react: {
		name: "React",
		textColor: "text-sky-600",
		borderColor: "border-sky-600",
	},
	flask: {
		name: "Flask",
		textColor: "text-cyan-500",
		borderColor: "border-cyan-500",
	},
	supabase: {
		name: "Supabase",
		textColor: "text-green-600",
		borderColor: "border-green-600",
	},
	python: {
		name: "Python",
		textColor: "text-blue-600",
		borderColor: "border-blue-600",
	},
	aws: {
		name: "AWS",
		textColor: "text-orange-600",
		borderColor: "border-orange-600",
	},
	remix: {
		name: "Remix",
		textColor: "text-gray-600",
		borderColor: "border-gray-600",
	},
	hono: {
		name: "Hono",
		textColor: "text-red-600",
		borderColor: "border-red-600",
	},
	drizzle: {
		name: "Drizzle ORM",
		textColor: "text-lime-600",
		borderColor: "border-lime-600",
	},
	docker: {
		name: "Docker",
		textColor: "text-blue-600",
		borderColor: "border-blue-600",
	},
	vercel: {
		name: "Vercel",
		textColor: "text-gray-600",
		borderColor: "border-gray-600",
	},
	android: {
		name: "Android",
		textColor: "text-green-600",
		borderColor: "border-green-600",
	},
	java: {
		name: "Java",
		textColor: "text-gray-600",
		borderColor: "border-gray-600",
	},
	githubActions: {
		name: "GitHub Actions",
		textColor: "text-gray-600",
		borderColor: "border-gray-600",
	},
	javascript: {
		name: "JavaScript",
		textColor: "text-yellow-600",
		borderColor: "border-yellow-600",
	},
	bootstrap: {
		name: "Bootstrap",
		textColor: "text-purple-600",
		borderColor: "border-purple-600",
	},
	raspberrypi: {
		name: "Raspberry Pi",
		textColor: "text-red-600",
		borderColor: "border-red-600",
	},
	fastapi: {
		name: "FastAPI",
		textColor: "text-emerald-600",
		borderColor: "border-emerald-600",
	},
	rust: {
		name: "Rust",
		textColor: "text-orange-600",
		borderColor: "border-orange-600",
	},
	vitest: {
		name: "Vitest",
		textColor: "text-green-600",
		borderColor: "border-green-600",
	},
	cloudflare: {
		name: "Cloudflare",
		textColor: "text-orange-600",
		borderColor: "border-orange-600",
	},
};

export const products: Product[] = [
	{
		id: "petrock",
		title: "Petrock",
		images: [
			{
				src: "/image/products/petrock/home.png",
				width: 247,
				height: 507,
			},
			{
				src: "/image/products/petrock/todo.png",
				width: 245,
				height: 467,
			},
			{
				src: "/image/products/petrock/chat.png",
				width: 232,
				height: 483,
			},
		],
		category: ["app"],
		technologies: ["aws", "typescript", "react", "fastapi"],
		// biome-ignore format: preference
		description: [
			"AIエージェントによる日々のToDo管理やチャットで相談できる機能によって、" +
			"子供が主体的にペットを飼育できるようサポートするPWA（Progressive Web Application）です。" +
			"AWS Summit Japan 2025 生成AIエージェントハッカソンに参加して開発しました。",
			"私は、チームがプロダクト開発に集中できるよう、技術面からチームを支えました。" +
			"具体的には、技術選定を主導し、メンバーからの相談に応える傍ら、" +
			"後回しにされがちな開発環境の整備やCI/CDの構築に率先して取り組みました。" +
			"開発効率と品質に直結する重要な基盤を整えることで、チームの生産性向上に貢献しました。",
		],
		links: [
			{
				name: "YouTube",
				url: "https://www.youtube.com/watch?v=gSazE0B8zm4",
				backgroundColor: "bg-red-500",
			},
			{
				name: "Article",
				url: "https://aws.amazon.com/jp/blogs/news/aiagent_hackathon_report/",
				backgroundColor: "bg-green-600",
			},
			{
				name: "GitHub",
				url: "https://github.com/ItwoonTech/petrock-nova",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "dream-base",
		title: "Dream Base",
		images: [
			{
				src: "/image/products/dream-base/mine.png",
				width: 1157,
				height: 801,
			},
			{
				src: "/image/products/dream-base/public.png",
				width: 1157,
				height: 801,
			},
		],
		category: ["app"],
		technologies: [
			"typescript",
			"react",
			"flask",
			"supabase",
			"githubActions",
			"vercel",
		],
		// biome-ignore format: preference
		description: [
			"書き溜めた夢を公開して「いいね！」を送り合えるWebサービスです。" +
			"PR TIMES HACKATHON 2025 Winterに参加して開発しました。",
			"他のユーザーから「いいね！」をもらうことで、自分の夢に対する肯定感を上げ、" +
			"夢を発信する心理的ハードルを下げることを目指したサービスです。",
		],
		links: [
			{
				name: "Website",
				url: "https://dreamsink.vercel.app/",
				backgroundColor: "bg-blue-500",
			},
			{
				name: "GitHub",
				url: "https://github.com/work-in-progress-team/dream-base",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "cis-lab-attendance-report",
		title: "CIS Lab Attendance Report",
		images: [
			{
				src: "/image/products/slack-attendance-report/ranking.png",
				width: 472,
				height: 250,
			},
		],
		category: ["bot"],
		technologies: ["python", "aws"],
		// biome-ignore format: preference
		description: [
			"毎月最終日に、その月に研究室へ出勤した回数をSlackに投稿するボットです。" +
			"出勤した回数は、毎日自動で投稿されるメッセージに対するスタンプの数で集計しています。",
			"出勤回数を集計してSlackへ投稿するLambda関数を定義し、Amazon EventBridgeで毎月最終日に定期実行しています。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/slack-attendance-report",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "bootstrap-portfolio",
		title: "ポートフォリオサイト1",
		images: [
			{
				src: "/image/products/bootstrap-portfolio/hero.png",
				width: 960,
				height: 684,
			},
			{
				src: "/image/products/bootstrap-portfolio/products.png",
				width: 960,
				height: 684,
			},
			{
				src: "/image/products/bootstrap-portfolio/skills.png",
				width: 960,
				height: 684,
			},
		],
		category: [],
		technologies: ["javascript", "bootstrap"],
		description: [
			"初めて制作したポートフォリオサイトです。",
			"CSSフレームワークのBootstrapについて勉強したことをアウトプットして自分のものにするために制作しました。",
		],
		links: [
			{
				name: "Website",
				url: "https://kimurash.github.io/portfolio/",
				backgroundColor: "bg-blue-500",
			},
			{
				name: "GitHub",
				url: "https://github.com/kimurash/portfolio",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "kitcc-library",
		title: "KITCC Library",
		images: [
			{
				src: "/image/products/kitcc-library/books.png",
				width: 960,
				height: 699,
			},
			{
				src: "/image/products/kitcc-library/users.png",
				width: 960,
				height: 699,
			},
			{
				src: "/image/products/kitcc-library/mypage.png",
				width: 960,
				height: 699,
			},
		],
		category: ["app"],
		technologies: [
			"remix",
			"hono",
			"drizzle",
			"vitest",
			"githubActions",
			"cloudflare",
		],
		// biome-ignore format: preference
		description: [
			"私が所属しているKITCC（Kyoto Institute of Technology Computer Club）が所有する書籍を管理するWebアプリです。",
			"蔵書の利用促進と、時間・場所を問わず貸し出し履歴を管理できるようすることが開発の主な目的です。" +
			"私はバックエンド全般とフロントエンドの一部とテストを担当しています。",
		],
		links: [
			{
				name: "Website",
				url: "https://kitcc-library-web.pages.dev/",
				backgroundColor: "bg-blue-500",
			},
			{
				name: "GitHub",
				url: "https://github.com/kitcc-org/kitcc-library",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "cis-lab-smart-lock",
		title: "CIS Lab Smart Lock",
		images: [
			{
				src: "/image/noimage.png",
				width: 760,
				height: 460,
			},
		],
		category: ["app"],
		technologies: ["python", "raspberrypi"],
		description: [
			"私が所属している情報知能システム研究室に導入したスマートロックです。",
			"学生証をPaSoRiというICカードリーダーにかざすと鍵が施錠 / 解錠されます。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/kit-lab-smart-lock",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "atcoder-gacha",
		title: "AtCoder Gacha",
		images: [
			{
				src: "/image/products/atcoder-gacha/today.png",
				width: 880,
				height: 504,
			},
		],
		category: ["bot"],
		technologies: ["docker", "python"],
		// biome-ignore format: preference
		description: [
			"Slackのスラッシュコマンドに反応して、AtCoderの過去問からランダムに出題してくれるSlackボットです。" +
			"コマンドの引数で問題の難易度を指定することができます。",
			"研究室のメンバーからのリクエストで、毎日決まった時刻に「今日の1問」を投稿する機能も実装しました。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/atcoder-gacha-bot",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "atcoder-review-bot",
		title: "AtCoder Review Bot",
		images: [
			{
				src: "/image/products/atcoder-review-bot/recommendation.png",
				width: 453,
				height: 430,
			},
			{
				src: "/image/products/atcoder-review-bot/reaction.png",
				width: 453,
				height: 430,
			},
		],
		category: ["bot"],
		technologies: ["docker", "python", "fastapi"],
		// biome-ignore format: preference
		description: [
			"特定のメッセージに反応して、Notionに登録されているAtCoderの過去問から、最も復習すべき問題を推薦してくれるLINEボットです。" +
			"問題の解答結果に応じてスタンプで反応してくれます。",
			"自分がスキマ時間で精進するために開発しました。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/atcoder-review-bot",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "my-juggler5-estimator",
		title: "マイジャグラーV 設定推定アプリ",
		images: [
			{
				src: "/image/products/my-juggler5-estimator/estimation.png",
				width: 845,
				height: 664,
			},
			{
				src: "/image/products/my-juggler5-estimator/balance.png",
				width: 845,
				height: 664,
			},
		],
		category: ["app"],
		technologies: ["typescript", "react", "vercel"],
		// biome-ignore format: preference
		description: [
			"スロットを回した結果に基づいてマイジャグラーⅤの設定（当たりやすさ）を推定するアプリです。",
			"ギャンブルが好きな友人が、より戦略に集中できるようにするために開発しました。" +
			"友人からのリクエストで、投資金額と収入を入力すると利益を計算できる機能も実装しました。",
		],
		links: [
			{
				name: "Website",
				url: "https://my-juggler-estimator.vercel.app",
				backgroundColor: "bg-blue-500",
			},
			{
				name: "GitHub",
				url: "https://github.com/kimurash/my-juggler-estimator",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "voice-actor-recognition",
		title: "声優100人の話者認識",
		// biome-ignore format: preference
		images: [
			{ src: "/image/noimage.png",
				width: 760,
				height: 460
			}
		],
		category: [],
		technologies: ["python"],
		// biome-ignore format: preference
		description: [
			"100人の声優を様々な機械学習モデルで話者認識した実験です。" +
			"話者認識とは、入力された音声信号に対して「誰が話しているか」を推定する技術です。",
			"長年アニメを見ていると、よく出演されている声優さんを識別できるようになってきます。" +
			"これは、脳が声優さんの声の特徴を学習しているためであり、同じことを機械学習でも実現できるのでは？と考えたのが実験の動機です。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/voice-actor-recognition",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "todoist-reminder",
		title: "Todoist Reminder",
		images: [
			{
				src: "/image/products/todoist-reminder/remind.png",
				width: 922,
				height: 615,
			},
		],
		category: ["bot"],
		technologies: ["python"],
		description: [
			"毎日決まった時刻にTodooistからタスクを取得して、提出期限が迫っているタスクをDiscordに通知するボットです。",
			"自分が課題の提出期限までに「提出確定ボタン」を確実に押すために開発しました。",
		],
		links: [
			{
				name: "Article",
				url: "https://esa-pages.io/p/sharing/19485/posts/15/e201cf1359bd9cbc3561.html",
				backgroundColor: "bg-green-600",
			},
			{
				name: "GitHub",
				url: "https://github.com/kimurash/todoist-remind-bot",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "pbl2-cpu-assembler",
		title: "教育用CPU向けのアセンブラ",
		// biome-ignore format: preference
		images: [
			{
				src: "/image/noimage.png",
				width: 760,
				height: 460,
			},
		],
		category: [],
		technologies: ["rust"],
		// biome-ignore format: preference
		description: [
			"本学の学部3回生に開講されているプロジェクト実習2のテーマ「CPU」で用いられる教育用CPU専用のアセンブラです。",
			"本テーマではCPUのシミュレータをC言語で実装します。" +
			"実装したシミュレータの正当性を証明するために、機械語のテストプログラムを用意する必要があり、" +
			"アセンブリ言語から機械語へハンドアセンブルするのが面倒だったので、アセンブラを開発しました。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/PJ2-CPU-assembler",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "nand2tetris",
		title: "Nand2Tetris",
		// biome-ignore format: preference
		images: [
			{
				src: "/image/noimage.png",
				width: 760,
				height: 460,
			},
		],
		category: [],
		technologies: ["java"],
		// biome-ignore format: preference
		description: [
			"NANDゲートからOSを作り上げ、最終的にその上で動かすアプリケーションを開発するプロジェクトです。",
			"「コンピュータの仕組みを解き明かしたい」という入学当時からの知的好奇心を満たすために取り組みました。" +
			"全てのプロジェクトを完遂し、自作OSの上でPONGゲームを動かすことができました。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/nand2tetris",
				backgroundColor: "bg-gray-500",
			},
		],
	},
	{
		id: "menu",
		title: "menU",
		// biome-ignore format: preference
		images: [
			{
				src: "/image/noimage.png",
				width: 760,
				height: 460,
			},
		],
		category: ["app"],
		technologies: ["android", "java"],
		// biome-ignore format: preference
		description: [
			"本学の学生食堂ORTUSの献立を組み立てるAndroidアプリです。",
			"2回生になってプログラミング能力がある程度身に付いてきた実感があったため、" +
			"何か実用的なものを作ってみたいという思いでAndroidアプリ開発に挑戦しました。",
			"メニューの情報が足りず実用には至りませんでしたが、" +
			"動くものを創ってインストールまでできたという成功体験は、私がものづくりに楽しさに目覚める重要なきっかけとなりました。",
		],
		links: [
			{
				name: "GitHub",
				url: "https://github.com/kimurash/menU",
				backgroundColor: "bg-gray-500",
			},
		],
	},
];
