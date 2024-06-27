"use client";
import ComparisonGraph from "@/components/ComparisonGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStatistics from "@/components/QuickStatistics";
import SkillTestCard from "@/components/SkillTestCard";
import SyllabusWiseAnalysis from "@/components/SyllabusWiseAnalysis";
import { useState } from "react";

export default function Home() {
	// State to hold the score, percentile, and rank
	const [score, setScore] = useState(10);
	const [percentile, setPercentile] = useState(30);
	const [rank, setRank] = useState(1);

	// Handler to update the state values
	const handleUpdate = (
		newRank: number,
		newPercentile: number,
		newScore: number
	) => {
		setScore(newScore);
		setPercentile(newPercentile);
		setRank(newRank);
	};
	return (
		<div className="w-full h-full">
			<h3 className="text-gray-800 text-sm capitalize pb-4">skill test</h3>
			<div className="flex xl:gap-8 gap-4 lg:flex-row flex-col">
				<div className="">
					<SkillTestCard onUpdate={handleUpdate} />
					<QuickStatistics
						rank={rank}
						percentile={percentile}
						correctAnswers={score}
					/>
					<ComparisonGraph userPercentile={percentile} />
				</div>
				<div className="lg:w-2/5 w-full">
					<SyllabusWiseAnalysis />
					<QuestionAnalysis correctAnswers={score} totalQuestions={15} />
				</div>
			</div>
		</div>
	);
}
