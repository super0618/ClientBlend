"use client";
import { useState } from "react";
import Logo from "@/components/logo";
import { IconMenu2 } from "@tabler/icons-react";

export default function () {
	const [expandMenu, setExpandMenu] = useState(false);

	return (
		<div className="sticky top-0 bg-white z-50">
			<div className="container flex justify-between items-center h-32">
				<div className="basis-[50px] md:basis-[225px] flex justify-between items-center">
					<Logo />
					<p className="hidden md:block font-bold text-2xl">CLIENTBLEND</p>
				</div>
				<div className="cursor-pointer" onClick={() => setExpandMenu((prev) => !prev)}>
					<IconMenu2 className="sm:hidden" />
				</div>
				<div className="hidden sm:flex gap-3">
					<div className="p-1 md:p-3">Product</div>
					<div className="p-1 md:p-3">How it works</div>
					<div className="p-1 md:p-3">Pricing</div>
					<div className="p-1 md:p-3">Resources</div>
					<div className="p-1 md:p-3">Login</div>
				</div>
			</div>
			{expandMenu && (
				<div className="flex-col gap-3">
					<div className="py-3 px-6">Product</div>
					<div className="py-3 px-6">How it works</div>
					<div className="py-3 px-6">Pricing</div>
					<div className="py-3 px-6">Resources</div>
					<div className="py-3 px-6">Login</div>
				</div>
			)}
		</div>
	);
}
