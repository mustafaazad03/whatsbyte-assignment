import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { PercentileGraphProps } from "@/utils/types";

ChartJS.register(
	LineElement,
	PointElement,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	annotationPlugin
);

const PercentileGraph: React.FC<PercentileGraphProps> = ({
	data,
	userPercentile,
}) => {
	const sortedData = [...data].sort((a, b) => a.percentile - b.percentile);

	const chartData = {
		datasets: [
			{
				data: sortedData.map((d) => ({ x: d.percentile, y: d.count })),
				borderColor: "#8884d8",
				tension: 0.4,
				pointRadius: 4,
				pointBackgroundColor: "#fff",
				pointBorderColor: "#8884d8",
				pointHoverBackgroundColor: "#8884d8",
				pointHoverBorderColor: "#8884d8",
				pointHoverRadius: 6,
				borderWidth: 1,
				segment: {
					borderColor: (ctx: any) => {
						const currentX = ctx.p0.parsed.x;
						const nextX = ctx.p1.parsed.x;

						// Remove connection if points are on the same percentile
						if (currentX === nextX && currentX === +userPercentile) {
							return "rgba(0,0,0,0)";
						}
						return "#8884d8";
					},
				},
			},
		],
	};

	const options = {
		scales: {
			x: {
				type: "linear" as const,
				min: 0,
				max: 100,
				ticks: {
					stepSize: 25,
					font: {
						size: 16, // Increased font size
					},
				},
				grid: {
					display: true,
					drawTicks: false,
					drawOnChartArea: false,
					color: "#888",
				},
				border: {
					display: true,
					width: 2,
					color: "#888",
				},
			},
			y: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				backgroundColor: "white",
				borderColor: "#ccc",
				borderWidth: 1,
				bodyColor: "black",
				titleColor: "#000",
				titleFont: {
					size: 16,
					weight: "bold",
				},
				bodyFont: {
					size: 14,
					weight: "bold",
					color: "#000",
				},
				padding: 10,
				yAlign: "bottom",
				displayColors: false,
				callbacks: {
					title: (context: any) => {
						if (context[0]) {
							return `${context[0].label}`;
						}
						return "";
					},
					label: (context: any) => {
						if (context.parsed) {
							return `numberOfStudent : ${context.parsed.y}`;
						}
						return "";
					},
					labelTextColor: () => "#8884d8",
				},
			},
			annotation: {
				annotations: {
					userPercentile: {
						type: "line" as const,
						xMin: userPercentile,
						xMax: userPercentile,
						borderColor: "#666",
						borderWidth: 0.5,
						label: {
							content: "your percentile",
							display: true,
							position: "end",
							// margin of 10px
							xAdjust: -5,
							yAdjust: 50,
							backgroundColor: "transparent",
							font: {
								size: 18,
								weight: "lighter",
							},
							color: "#666",
						},
					},
					ninetyPercentile: {
						type: "line" as const,
						xMin: 90,
						xMax: 90,
						borderColor: "#666",
						borderWidth: 0.5,
						label: {
							content: ["90", "numberOfStudent : 4"],
							display: true,
							position: "end",
							backgroundColor: "transparent",
							font: {
								size: 12,
							},
						},
					},
				},
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<div className="w-full h-64">
			<Line data={chartData} options={options as any} />
		</div>
	);
};

export default PercentileGraph;
