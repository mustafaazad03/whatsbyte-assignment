"use client";
import React, { useState } from "react";
import PercentileGraph from "../components/PercentileGraph";
import Image from "next/image";

const ComparisonGraph: React.FC = () => {
	const [percentileData, setPercentileData] = useState([
		{ percentile: 0, count: 1 },
		{ percentile: 10, count: 2 },
		{ percentile: 20, count: 3 },
		{ percentile: 30, count: 7 },
		{ percentile: 30, count: 4 },
		{ percentile: 30, count: 10 },
		{ percentile: 40, count: 10 },
		{ percentile: 50, count: 20 },
		{ percentile: 60, count: 15 },
		{ percentile: 70, count: 10 },
		{ percentile: 80, count: 5 },
		{ percentile: 90, count: 2 },
		{ percentile: 100, count: 1 },
	]);

	const userPercentile = 30;

	return (
		<div className="p-4 border border-gray-200 rounded-lg">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-4">
					<h3 className="capitalize font-extrabold">comparison graph</h3>
					<p className="text-gray-800">
						<span className="font-semibold">You scored 30% percentile</span>{" "}
						which is lower than the <br /> average percentile 72% of all
						engineers who took this assignment
					</p>
				</div>
				<div className="bg-gray-200 p-4 rounded-full">
					<Image
						src="/chart_up.svg"
						alt="Chart Up logo"
						width={100}
						height={100}
						className="w-6 h-6"
					/>
				</div>
			</div>
			<PercentileGraph data={percentileData} userPercentile={userPercentile} />
		</div>
	);
};

export default ComparisonGraph;
