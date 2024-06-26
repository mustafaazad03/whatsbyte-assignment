import React from "react";

const SyllabusWiseAnalysis = () => {
	const syllabusWiseAnalysis = [
		{
			syllabus: "HTML Tools, Forms, History",
			percent: 80,
			color: "#3B82F6",
			textColor: "text-[#3B82F6]",
		},
		{
			syllabus: "Tags & References in HTML",
			percent: 60,
			color: "#F97316",
			textColor: "text-[#F97316]",
		},
		{
			syllabus: "Tables & References in HTML",
			percent: 24,
			color: "#EF4444",
			textColor: "text-[#EF4444]",
		},
		{
			syllabus: "Tables & CSS Basics",
			percent: 96,
			color: "#22C55E",
			textColor: "text-[#22C55E]",
		},
	];

	return (
		<div className="p-6 border border-gray-200 rounded-lg w-full h-fit">
			<h3 className="font-extrabold mb-8">Syllabus Wise Analysis</h3>
			<div className="space-y-6">
				{syllabusWiseAnalysis.map((item, index) => (
					<div key={index}>
						<p className="text-gray-800 mb-1">{item.syllabus}</p>
						<div className="flex items-center">
							<div className="flex-1 bg-gray-200 rounded-full h-2.5 mr-2">
								<div
									className="h-2.5 rounded-full"
									style={{
										width: `${item.percent}%`,
										backgroundColor: item.color,
									}}
								></div>
							</div>
							<span className={`font-semibold ${item.textColor}`}>
								{item.percent}%
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SyllabusWiseAnalysis;
