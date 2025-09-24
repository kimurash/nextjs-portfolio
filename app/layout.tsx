import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "shunsei",
	description: "shunseiのポートフォリオサイト",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="antialiased min-h-screen flex flex-col">
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
