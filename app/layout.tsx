import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ClientBlend",
	description: "This is a description for ClientBlend",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
