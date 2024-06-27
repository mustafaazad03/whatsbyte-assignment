import { QuickStatisticProps } from "@/utils/types";
import Image from "next/image";
import React from "react";

const QuickStatistics: React.FC<QuickStatisticProps> = ({
	rank,
	percentile,
	correctAnswers,
}) => {
	return (
		<div className="border border-gray-200 rounded-lg p-4 sm:w-fit w-full my-5">
			<h3 className="font-extrabold capitalize pb-2">Quick Statistics</h3>
			<div className="grid grid-cols-3 px-1">
				<div className="border-r border-gray-200 p-4 xl:px-6 px-2 flex items-center gap-2">
					<div className="bg-gray-200 p-4 rounded-full hidden sm:flex">
						<Image
							src="/trophy.svg"
							alt="trophy logo"
							width={100}
							height={100}
							className="w-6 h-6"
						/>
					</div>
					<div className="text-left space-y-0.5">
						<h5 className="font-extrabold text-lg">{rank}</h5>
						<p className="text-gray-400 uppercase text-sm">Your Rank</p>
					</div>
				</div>
				<div className="border-r border-gray-200 p-4 xl:px-6 px-2 flex items-center gap-2">
					<div className="bg-gray-200 p-4 rounded-full hidden sm:flex">
						<Image
							src="/form.svg"
							alt="form logo"
							width={100}
							height={100}
							className="w-6 h-6"
						/>
					</div>
					<div className="text-left space-y-0.5">
						<h5 className="font-extrabold text-lg">{percentile}%</h5>
						<p className="text-gray-400 uppercase text-sm">Percentile</p>
					</div>
				</div>
				<div className="p-4 xl:px-6 px-2 flex items-center gap-2 w-fit mx-auto">
					<div className="bg-gray-200 p-4 rounded-full hidden sm:flex">
						<Image
							src="/tick-box.svg"
							alt="Tick box logo"
							width={100}
							height={100}
							className="w-6 h-6"
						/>
					</div>
					<div className="text-left space-y-0.5">
						<h5 className="font-extrabold text-lg">{correctAnswers} / 15</h5>
						<p className="text-gray-400 uppercase text-sm">Correct Answers</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickStatistics;
