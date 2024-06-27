"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
	const dashboardLinks = [
		{
			id: 1,
			name: "Dashboard",
			icon: "/chart.svg",
			url: "/dashboard",
		},
		{
			id: 2,
			name: "Skill Test",
			icon: "/prize.svg",
			url: "/",
		},
		{
			id: 3,
			name: "Internship",
			icon: "/page.svg",
			url: "/internship",
		},
	];
	const path = usePathname();
	return (
		<div className="flex h-screen overflow-hidden">
			<div className="w-1/5 border-r hidden md:flex border-gray-200 pt-40 pr-4 gap-4 flex-col">
				{dashboardLinks.map((link) => (
					<Link
						href={link.url}
						className={`flex items-center space-x-4 p-5 w-full ${
							path === link.url ? "bg-gray-100 rounded-r-full" : ""
						}`}
						key={link.id}
					>
						<Image
							src={link.icon}
							alt={link.name}
							width={24}
							height={24}
							className="w-6 h-6 hidden lg:flex"
						/>
						<span className="font-bold lg:text-lg xl:text-xl text-gray-800">
							{link.name}
						</span>
					</Link>
				))}
			</div>
			<div className="lg:w-4/5 w-full overflow-y-scroll pt-32 xl:px-12 px-4">
				{children}
			</div>
		</div>
	);
};

export default Sidebar;
