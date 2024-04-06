import Logo from "@/components/logo";
import { IconBrandFacebookFilled, IconBrandInstagram } from "@tabler/icons-react";

export default function () {
	return (
		<div className="bg-[#C6C7ED32]">
			<div className="container grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-8 pt-40 pb-24 border-b ">
				<div className="col-span-2 sm:col-span-4 md:col-span-2">
					<div className="mb-6">
						<Logo />
					</div>
					<p className="text-sm">© 2023 Clientblend B.V.</p>
					<p className="text-sm">All rights reserved.</p>
				</div>
				<div className="space-y-2">
					<p className="font-bold">Platform</p>
					<p>Manage</p>
					<p>Launch</p>
					<p>Automate</p>
					<p>Manage</p>
					<p>Launch</p>
					<p>Automate</p>
				</div>
				<div className="space-y-2">
					<p className="font-bold">Compare</p>
					<p>Manage</p>
					<p>Launch</p>
					<p>Automate</p>
					<p>Manage</p>
					<p>Launch</p>
				</div>
				<div className="space-y-2">
					<p className="font-bold">Support</p>
					<p>Manage</p>
					<p>Launch</p>
					<p>Automate</p>
					<p>Manage</p>
					<p>Launch</p>
					<p>Automate</p>
				</div>
				<div className="space-y-2">
					<p className="font-bold">Blog</p>
					<p>Support center</p>
					<p>Contact</p>
					<p>Office</p>
					<p>Client support</p>
				</div>
			</div>
			<div className="container flex items-center justify-between pt-12 pb-16">
				<div className="flex gap-6">
					<div className="w-7 h-7 rounded-full bg-black grid place-items-center">
						<IconBrandFacebookFilled size={20} color="#fff" />
					</div>
					<div className="w-7 h-7 rounded-full bg-black grid place-items-center">
						<IconBrandInstagram size={20} color="#fff" />
					</div>
				</div>
				<div>
					<select className="bg-[#e1e1f6] px-2 py-1 border rounded-md">
						<option>English</option>
						<option>English</option>
					</select>
				</div>
			</div>
			<div className="bg-gradient-to-r from-[#b2b3e7] to-[#7d7ed6] h-8"></div>
		</div>
	);
}
