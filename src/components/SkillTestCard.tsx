import Image from "next/image";
import React from "react";

const SkillTestCard = () => {
	return (
		<div className="flex flex-col gap-3 w-fit">
			<div className="flex items-center gap-2 border border-gray-200 rounded-lg p-4 py-6">
				<Image
					src="/html.svg"
					alt="html logo"
					width={100}
					height={100}
					className="w-16 h-auto object-contain"
				/>
				<div className="text-left space-y-1 px-1">
					<h2 className="font-extrabold capitalize">
						hyper text markup language
					</h2>
					<div className="flex items-center gap-1 text-gray-800">
						<span className="">Questions: 08</span> |
						<span className="">Duration: 15 mins</span> |
						<span className="">Submitted on 5 June 2021</span>
					</div>
				</div>
				<button
					type="button"
					className="bg-gray-800 text-white px-6 py-2 rounded-lg ring ring-slate-800"
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default SkillTestCard;
