import type { Product, Technology } from "./types";

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
	raspberryPi: {
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
		id: "dream-base",
		title: "Dream Base",
		image: "/image/noimage.png",
		technologies: [
			"typescript",
			"react",
			"flask",
			"supabase",
			"githubActions",
			"vercel",
		],
		description: [
			"書き溜めた夢を公開して「いいね！」を送り合えるWebサービスです。PR TIMES HACKATHON 2025 Winterに参加して開発しました。",
			"他のユーザーから「いいね！」をもらうことで、自分の夢に対する肯定感を上げ、夢を発信する心理的ハードルを下げることを目指したサービスです。",
		],
	},
	{
		id: "cis-lab-attendance-report",
		title: "CIS Lab Attendance Report",
		image: "/image/noimage.png",
		technologies: ["python", "aws"],
		description: [
			"毎月最終日に、その月に研究室へ出勤した回数をSlackに投稿するボットです。出勤した回数は、毎日自動で投稿されるメッセージに対するスタンプの数で集計しています。",
			"出勤回数を集計してSlackへ投稿するLambda関数を定義し、Amazon EventBridgeで毎月最終日に定期実行しています。",
		],
	},
	{
		id: "bootstrap-portfolio",
		title: "ポートフォリオサイト1",
		image: "/image/noimage.png",
		technologies: ["javascript", "bootstrap"],
		description: [
			"このポートフォリオサイトです。",
			"CSSフレームワークのBootstrapについて勉強したことをアウトプットして自分のものにするために制作しました。",
		],
	},
	{
		id: "kitcc-library",
		title: "KITCC Library",
		image: "/image/noimage.png",
		technologies: [
			"remix",
			"hono",
			"drizzle",
			"vitest",
			"githubActions",
			"cloudflare",
		],
		description: [
			"私が所属しているKITCC（Kyoto Institute of Technology Computer Club）が所有する書籍を管理するWebアプリです。",
			"蔵書の利用促進と、時間・場所を問わず貸し出し履歴を管理できるようすることが開発の主な目的です。私はバックエンド全般とフロントエンドの一部とテストを担当しています。",
		],
	},
	{
		id: "cis-lab-smart-lock",
		title: "CIS Lab Smart Lock",
		image: "/image/noimage.png",
		technologies: ["python", "raspberryPi"],
		description: [
			"私が所属している情報知能システム研究室に導入したスマートロックです。",
			"学生証をPaSoRiというICカードリーダーにかざすと鍵が施錠 / 解錠されます。",
		],
	},
	{
		id: "atcoder-gacha-bot",
		title: "AtCoder Gacha Bot",
		image: "/image/noimage.png",
		technologies: ["docker", "python"],
		description: [
			"Slackのスラッシュコマンドに反応して、AtCoderの過去問からランダムに出題してくれるSlackボットです。コマンドの引数で問題の難易度を指定することができます。",
			"研究室のメンバーからのリクエストで、毎日決まった時刻に「今日の1問」を投稿する機能も実装しました。",
		],
	},
	{
		id: "atcoder-review-bot",
		title: "AtCoder Review Bot",
		image: "/image/noimage.png",
		technologies: ["docker", "python", "fastapi"],
		description: [
			"特定のメッセージに反応して、Notionに登録されているAtCoderの過去問から、最も復習すべき問題を推薦してくれるLINEボットです。問題の解答結果に応じてスタンプで反応してくれます。",
			"自分がスキマ時間で精進するために開発しました。",
		],
	},
	{
		id: "myjuggler-estimator",
		title: "マイジャグラーV 設定推定アプリ",
		image: "/image/noimage.png",
		technologies: ["typescript", "react", "vercel"],
		description: [
			"スロットを回した結果に基づいてマイジャグラーⅤの設定（当たりやすさ）を推定するアプリです。",
			"ギャンブルが好きな友人が、より戦略に集中できるようにするために開発しました。友人からのリクエストで、投資金額と収入を入力すると利益を計算できる機能も実装しました。",
		],
	},
	{
		id: "voice-actor-recognition",
		title: "声優100人の話者認識",
		image: "/image/noimage.png",
		technologies: ["python"],
		description: [
			"100人の声優を様々な機械学習モデルで話者認識した実験です。話者認識とは、入力された音声信号に対して「誰が話しているか」を推定する技術です。",
			"長年アニメを見ていると、よく出演されている声優さんを識別できるようになってきます。これは、脳が声優さんの声の特徴を学習しているためであり、同じことを機械学習でも実現できるのでは？と考えたのが実験の動機です。",
		],
	},
	{
		id: "todoist-reminder",
		title: "Todoist Reminder",
		image: "/image/noimage.png",
		technologies: ["python"],
		description: [
			"毎日決まった時刻にTodooistからタスクを取得して、提出期限が迫っているタスクをDiscordに通知するボットです。",
			"自分が課題の提出期限までに「提出確定ボタン」を確実に押すために開発しました。",
		],
	},
	{
		id: "pbl2-cpu-assembler",
		title: "教育用CPU向けのアセンブラ",
		image: "/image/noimage.png",
		technologies: ["rust"],
		description: [
			"本学の学部3回生に開講されているプロジェクト実習2のテーマ「CPU」で用いられる教育用CPU専用のアセンブラです。",
			"本テーマではCPUのシミュレータをC言語で実装します。実装したシミュレータの正当性を証明するために、機械語のテストプログラムを用意する必要があり、アセンブリ言語から機械語へハンドアセンブルするのが面倒だったので、アセンブラを開発しました。",
		],
	},
	{
		id: "nand2tetris",
		title: "Nand2Tetris",
		image: "/image/noimage.png",
		technologies: ["java"],
		description: [
			"NANDゲートからOSを作り上げ、最終的にその上で動かすアプリケーションを開発するプロジェクトです。",
			"「コンピュータの仕組みを解き明かしたい」という入学当時からの知的好奇心を満たすために取り組みました。全てのプロジェクトを完遂し、自作OSの上でPONGゲームを動かすことができました。",
		],
	},
	{
		id: "menu",
		title: "menU",
		image: "/image/noimage.png",
		technologies: ["android", "java"],
		description: [
			"本学の学生食堂ORTUSの献立を組み立てるAndroidアプリです。",
			"2回生になってプログラミング能力がある程度身に付いてきた実感があったため、何か実用的なものを作ってみたいという思いでAndroidアプリ開発に挑戦しました。",
			"メニューの情報が足りず実用には至りませんでしたが、動くものを創ってインストールまでできたという成功体験は、私がものづくりに楽しさに目覚める重要なきっかけとなりました。",
		],
	},
];
