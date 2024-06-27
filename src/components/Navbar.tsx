import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className="bg-white border-b border-gray-200 sm:p-8 py-6 px-4 flex items-center justify-between fixed w-full z-50">
			<div className="h-full w-auto">
				<Image
					src="/logo.png"
					alt="logo"
					width={140}
					height={140}
					className="object-cover sm:w-48 w-28 h-full"
				/>
			</div>
			<div className="rounded-lg p-2 flex items-center space-x-2 border-2 border-gray-200">
				<Image
					src="/profile.png"
					alt="profile"
					width={50}
					height={50}
					className="uneven-border-radius sm:w-9 sm:h-8 w-5 h-4 object-cover"
				/>
				<h3 className="font-bold sm:text-base text-sm">Rahil Siddique</h3>
			</div>
		</div>
	);
};

export default Navbar;
