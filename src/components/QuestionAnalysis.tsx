"use client";
import React, { useEffect, useRef } from "react";
import {
	Chart,
	ChartConfiguration,
	ChartData,
	DoughnutController,
	ArcElement,
} from "chart.js";
import Image from "next/image";
import { QuestionAnalysisProps } from "@/utils/types";

Chart.register(DoughnutController, ArcElement);

const QuestionAnalysis = ({
	correctAnswers,
	totalQuestions,
}: QuestionAnalysisProps) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstance = useRef<Chart<"doughnut", number[], unknown> | null>(
		null
	);

	useEffect(() => {
		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		if (chartRef.current) {
			const ctx = chartRef.current.getContext("2d");

			if (ctx) {
				const data: ChartData<"doughnut", number[], unknown> = {
					datasets: [
						{
							data: [correctAnswers, totalQuestions - correctAnswers],
							backgroundColor: ["#3B82F6", "#E5E7EB"],
							borderWidth: 0,
						},
					],
				};

				const config: ChartConfiguration<"doughnut", number[], unknown> = {
					type: "doughnut",
					data: data,
					options: {
						cutout: "65%",
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								display: false,
							},
							tooltip: {
								enabled: false,
							},
						},
					},
				};

				chartInstance.current = new Chart(ctx, config);
			}
		}

		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, [correctAnswers, totalQuestions]);

	return (
		<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 my-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">Question Analysis</h2>
				<span className="text-blue-600 font-semibold">
					{correctAnswers}/{totalQuestions}
				</span>
			</div>
			<p className="text-gray-600 mb-6">
				<span className="font-bold">
					You scored {correctAnswers} questions correct out of {totalQuestions}.
				</span>
				However, it still needs some improvements
			</p>
			<div className="relative" style={{ height: "200px" }}>
				<canvas ref={chartRef} />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Image
						width={100}
						height={100}
						src="/aim.svg"
						alt="aim logo"
						className="w-16 h-16"
					/>
				</div>
			</div>
		</div>
	);
};

export default QuestionAnalysis;
