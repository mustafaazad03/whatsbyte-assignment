import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className="bg-white border-b border-gray-200 p-8 py-6 flex items-center justify-between fixed w-full z-50">
			<div className="h-full w-auto">
				<Image
					src="/logo.png"
					alt="logo"
					width={140}
					height={140}
					className="object-cover w-48 h-full"
				/>
			</div>
			<div className="rounded-lg p-2 flex items-center space-x-2 border-2 border-gray-200">
				<Image
					src="/profile.png"
					alt="profile"
					width={50}
					height={50}
					className="uneven-border-radius w-9 h-8 object-cover"
				/>
				<h3 className="font-bold">Rahil Siddique</h3>
			</div>
		</div>
	);
};

export default Navbar;
