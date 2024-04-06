// @ts-nocheck

"use client";
import { useRef } from "react";
import { IconCheck, IconArrowRight, IconMessage, IconFileCheck } from "@tabler/icons-react";

export default function Home() {
	const blendsAutomated = useRef(null);
	const blendsMilestone = useRef(null);
	const blendsAction = useRef(null);
	const blendsImage = useRef(null);

	const clientAutomated = useRef(null);
	const clientShared = useRef(null);
	const clientProject = useRef(null);
	const clientImage = useRef(null);

	const onClickBlendsAutomated = () => {
		if (blendsMilestone.current && blendsMilestone.current && blendsAutomated.current && blendsImage.current) {
			blendsMilestone.current.classList.remove("text-[#7D7ED6]");
			blendsMilestone.current.classList.remove("text-[#7D7ED6]");
			blendsAutomated.current.classList.add("text-[#7D7ED6]");
			blendsImage.current.src = "/blends.png";
		}
	};

	const onClickBlendsMilestone = () => {
		blendsAutomated.current.classList.remove("text-[#7D7ED6]");
		blendsAction.current.classList.remove("text-[#7D7ED6]");
		blendsMilestone.current.classList.add("text-[#7D7ED6]");
		blendsImage.current.src = "/clientportal.png";
	};

	const onClickBlendsAction = () => {
		blendsAutomated.current.classList.remove("text-[#7D7ED6]");
		blendsMilestone.current.classList.remove("text-[#7D7ED6]");
		blendsAction.current.classList.add("text-[#7D7ED6]");
		blendsImage.current.src = "/blends.png";
	};

	const onClickClientAutomated = () => {
		clientShared.current.classList.remove("text-[#7D7ED6]");
		clientProject.current.classList.remove("text-[#7D7ED6]");
		clientAutomated.current.classList.add("text-[#7D7ED6]");
		clientImage.current.src = "/blends.png";
	};

	const onClickClientShared = () => {
		clientAutomated.current.classList.remove("text-[#7D7ED6]");
		clientProject.current.classList.remove("text-[#7D7ED6]");
		clientShared.current.classList.add("text-[#7D7ED6]");
		clientImage.current.src = "/clientportal.png";
	};

	const onClickClientProject = () => {
		clientAutomated.current.classList.remove("text-[#7D7ED6]");
		clientShared.current.classList.remove("text-[#7D7ED6]");
		clientProject.current.classList.add("text-[#7D7ED6]");
		clientImage.current.src = "/blends.png";
	};

	return (
		<>
			<div className="container grid grid-cols-3 md:grid-cols-5 gap-6 py-6">
				<div className="col-span-3 max-w-[560px]">
					<p className="font-bold text-[36px] leading-[40px] sm:text-[48px] sm:leading-[52px] md:text-[56px] md:leading-[64px] lg:text-[68px] lg:leading-[76px] xl:text-[72px] xl:leading-[80px] mb-6">
						Manage Client
						<br />
						Journeys On
						<br />
						<span className="text-[#7D7ED6]">Autopilot</span>
					</p>
					<p className="text-base md:text-[18px] lg:text-[20px] mb-12">
						By creating automated workflows and automatic client updates, Clientblend saves you organizational work and let you focus on getting
						results.
					</p>
					<div className="bg-gradient-to-r from-[#b2b3e7] to-[#7d7ed6] text-white py-5 px-12 rounded-full inline-block mb-6">GET STARTED</div>
					<div className="flex flex-col sm:flex-row justify-between text-[#666]">
						<div className="flex items-center gap-2 py-1">
							<IconCheck size={16} />
							<p>14-day free trial</p>
						</div>
						<div className="flex items-center gap-2 py-1">
							<IconCheck size={16} />
							<p>No credit card required</p>
						</div>
						<div className="flex items-center gap-2 py-1">
							<IconCheck size={16} />
							<p>Cancel anytime</p>
						</div>
					</div>
				</div>
				<div className="hidden md:block col-span-2">
					<div className="rounded-3xl overflow-hidden">
						<img src="/autopilot.png" alt="autopilot" className="w-full object-cover" />
					</div>
				</div>
			</div>

			<div className="container py-12">
				<p className="font-bold text-xl mb-6">BETA VERSION 1.2.2</p>
				<div className="p-8 bg-[#fff9e4] flex justify-between items-center rounded-3xl">
					<p className="text-sm sm:text-base md:text-lg lg:text-xl">
						Want to tailor the software to your needs? <span className="font-bold text-[#7D7ED6]">Join the Beta version now</span>
					</p>
					<IconArrowRight color="#7D7ED6" size={30} />
				</div>
			</div>

			<div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 py-12">
				<div>
					<p className="text-xl mb-6 text-[#7D7ED6]">Customer journey</p>
					<p className="text-[30px] leading-[36px] xl:text-[56px] xl:leading-[68px] font-bold text-[#2E2D2D] mb-12">Taking back control.</p>
					<p className="text-lg">
						Everyone knows the feeling about clients sending information at all kinds of channels. With Felix you predefine the customer journey in
						a way the clients need to deliver all information at your terms.
					</p>
				</div>
				<div>
					<div className="border rounded-2xl text-center p-4">
						<p className="pt-8 pb-4">
							<span className="font-bold">Without</span> Clientblend
						</p>
						<p>Chaotic contracts scatter the data flow and cause headaches</p>
						<img src="/1.png" alt="img1" className="h-[250px] w-auto mx-auto" />
					</div>
				</div>
				<div>
					<div className="border rounded-2xl text-center p-4">
						<p className="pt-8 pb-4">
							<span className="font-bold">Without</span> Clientblend
						</p>
						<p>One streamlined process simplifies and error-proofs your deal flow</p>
						<img src="/2.png" alt="img2" className="h-[250px] w-auto mx-auto" />
					</div>
				</div>
			</div>

			<div className="container text-center py-12">
				<p className="text-[#DC8791] text-xl mb-6">HOW IT WORKS</p>
				<p className="text-[32px] leading-[40px] md:text-[48px] text-[#2E2D2D] md:leading-[56px] max-w-[700px] mx-auto mb-6">
					<span className="font-bold">One Place</span> To Manage All Your Clients.
				</p>
				<video width="100%" className="rounded-xl border-2" controls>
					<source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="container grid grid-cols-3 md:grid-cols-5 py-12">
				<div className="col-span-3 md:pr-8">
					<p className="text-[#7D7ED6] text-xl font-bold mb-4">BLENDS</p>
					<p className="text-[#2E2D2D] text-[24px] leading-[30px] sm:text-[36px] sm:leading-[42px] md:text-[42px] md:leading-[48px] lg:text-[48px] lg:leading-[56px] font-bold mb-6">
						Create Integrated Workflows.
					</p>
					<p className="text-sm sm:text-base lg:text-lg mb-6">
						Save time by setting up the blends used in each milestone one time. Then just with a click launch the setup blend saving you a lot of
						time so you can focus on the real work.
					</p>
					<div className="space-y-4">
						<div
							className="flex items-center cursor-pointer gap-6 bg-[#F9F9F9] rounded-lg px-8 py-4 text-[#7D7ED6]"
							ref={blendsAutomated}
							onClick={onClickBlendsAutomated}
						>
							<IconMessage size={24} />
							<p className="font-bold">Automated emails</p>
						</div>
						<div
							className="flex items-center cursor-pointer gap-6 bg-[#F9F9F9] rounded-lg px-8 py-4"
							ref={blendsMilestone}
							onClick={onClickBlendsMilestone}
						>
							<IconFileCheck size={24} />
							<p className="font-bold">Milestone tracking</p>
						</div>
						<div
							className="flex items-center cursor-pointer gap-6 bg-[#F9F9F9] rounded-lg px-8 py-4"
							ref={blendsAction}
							onClick={onClickBlendsAction}
						>
							<IconFileCheck size={24} />
							<p className="font-bold">Action overview</p>
						</div>
					</div>
				</div>
				<div className="col-span-3 md:col-span-2">
					<div className="rounded-3xl overflow-hidden">
						<img src="/blends.png" alt="autopilot" className="w-full object-cover" ref={blendsImage} />
					</div>
				</div>
			</div>

			<div className="container flex gap-6 py-12">
				<div className="basis-20 sm:basis-32 md:basis-40 lg:basis-60 grow-0 shrink-0">
					<img src="/testmonial.jpg" alt="testmonial" width="240px" height="240px" />
				</div>
				<div className="text-[#2E2D2D]">
					<div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[36px] font-medium mb-6">
						"Clientblend allows me to spend more time on strategy. It gives me the mental space to work proactively rather than reactively."
					</div>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl">
						<span className="font-bold">Brenna Kleiman</span>, Senior Media Manager - Paid social
					</p>
				</div>
			</div>

			<div className="container bg-[#F9F9F9] rounded-xl text-center p-6 md:p-12 my-12">
				<p className="font-bold text-xl text-[#DC8791] mb-6">FORMS</p>
				<p className="text-3xl md:text-[48px] md:leading-[56px] text-[#2E2D2D] font-bold mb-6">Streamline Recourses.</p>
				<div className="text-base sm:text-xl md:text-2xl max-w-[750px] mx-auto mb-6">
					Never lose a file through endless stream of emails. Use our form builder to streamline the information needed during the project. With our
					document generator you can generate automatically a job description saving you a lot of time.
				</div>
				<div className="max-w-[950px] mx-auto">
					<div className="grid place-items-center mb-6">
						<img src="/resources.svg" alt="resources" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 text-[#2E2D2D] gap-8">
						<div>
							<p className="font-bold text-xl md:text-2xl text-left mb-4">Form builder</p>
							<p className="text-base md:text-[20px] md:leading-[24px] text-justify">
								The most secure marketplace for buying and selling unique crypto assets.
							</p>
						</div>
						<div>
							<p className="font-bold text-xl md:text-2xl text-left mb-4">Shared recourses</p>
							<p className="text-base md:text-[20px] md:leading-[24px] text-justify">
								The most secure marketplace for buying and selling unique crypto assets.
							</p>
						</div>
						<div>
							<p className="font-bold text-xl md:text-2xl text-left mb-4">Document generation</p>
							<p className="text-base md:text-[20px] md:leading-[24px] text-justify">
								The most secure marketplace for buying and selling unique crypto assets.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container grid grid-cols-3 md:grid-cols-5 py-12 gap-y-8">
				<div className="col-span-3 md:pr-8">
					<p className="text-[#7D7ED6] text-xl font-bold mb-4">CLIENT PORTAL</p>
					<p className="text-[#2E2D2D] text-[24px] leading-[30px] sm:text-[36px] sm:leading-[42px] md:text-[42px] md:leading-[48px] lg:text-[48px] lg:leading-[56px] font-bold mb-6">
						Offer a Personal Client Environment.
					</p>
					<p className="text-sm sm:text-base lg:text-lg mb-6">
						The most secure marketplace for buying and selling unique crypto assets. The most secure marketplace for buying and selling unique
						crypto assets.
					</p>
					<div className="space-y-4">
						<div
							className="flex items-center cursor-pointer gap-6 bg-[#F9F9F9] rounded-lg px-8 py-4 text-[#7D7ED6]"
							ref={clientAutomated}
							onClick={onClickClientAutomated}
						>
							<IconMessage size={24} />
							<p className="font-bold">Automated updates</p>
						</div>
						<div
							className="flex items-center cursor-pointer gap-6 bg-[#F9F9F9] rounded-lg px-8 py-4"
							ref={clientShared}
							onClick={onClickClientShared}
						>
							<IconFileCheck size={24} />
							<p className="font-bold">Shared Resources</p>
						</div>
						<div
							className="flex items-center cursor-pointer gap-6 bg-[#F9F9F9] rounded-lg px-8 py-4"
							ref={clientProject}
							onClick={onClickClientProject}
						>
							<IconFileCheck size={24} />
							<p className="font-bold">Project overview</p>
						</div>
					</div>
					<div className="rounded-2xl shadow-xl max-w-[560px] py-8 px-6">
						<p className="text-[#2E2D2D] mb-6">“Clientblend is my go to. Literally will save you lots of hours in managing clients.”</p>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							<div>
								<img src="/nextad.svg" alt="nextad" />
							</div>
							<div className="flex col-span-2 gap-5">
								<img src="/clientcircle.png" alt="client" className="rounded-full w-[50px] h-[50px]" />
								<div>
									<p className="font-bold text-lg">Tim Burd</p>
									<p className="text-[#666]">Consultant & Co-Founder</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-3 md:col-span-2">
					<div className="rounded-3xl overflow-hidden">
						<img src="/clientportal.png" alt="autopilot" className="w-full object-cover" ref={clientImage} />
					</div>
				</div>
			</div>

			<div className="py-12">
				<p className="text-[#DC8791] text-center text-xl mb-6">Integrations</p>
				<p className="text-[36px] leading-[42px] lg:text-[48px] lg:leading-[56px] text-[#2E2D2D] text-center font-bold max-w-[700px] mx-auto mb-6">
					Integrate with your current workflows.
				</p>
				<img src="/clients.png" alt="clients" width="100%" />
			</div>

			<div className="container pt-6">
				<div className="relative rounded-t-2xl text-white bg-gradient-to-r from-[#b2b3e7] to-[#7d7ed6] text-center">
					<p className="pt-12 pb-6 text-xl">Automate client management. automate growth.</p>
					<p className="text-[36px] leading-[42px] lg:text-[48px] lg:leading-[64px] font-bold max-w-[500px] mx-auto py-4 mb-6">
						Let’s create fans from your clients
					</p>
					<div className="rounded-full bg-black text-lg px-8 py-3 inline-block mx-2 mb-6">JOIN BETA VERSION</div>
					<div className="absolute bg-gradient-to-r from-[#b2b3e7] to-[#7d7ed6] rounded-b-2xl top-full left-0 right-0 p-6 -z-10">
						<div className="flex flex-col sm:flex-row justify-between text-white max-w-[700px] mx-auto">
							<div className="flex items-center gap-2">
								<IconCheck size={16} />
								<p className="text-base py-1">14-day free trial</p>
							</div>
							<div className="flex items-center gap-2">
								<IconCheck size={16} />
								<p className="text-base py-1">No credit card required</p>
							</div>
							<div className="flex items-center gap-2">
								<IconCheck size={16} />
								<p className="text-base py-1">Cancel anytime</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
