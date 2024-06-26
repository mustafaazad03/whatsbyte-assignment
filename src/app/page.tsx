import ComparisonGraph from "@/components/ComparisonGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStatistics from "@/components/QuickStatistics";
import SkillTestCard from "@/components/SkillTestCard";
import SyllabusWiseAnalysis from "@/components/SyllabusWiseAnalysis";

export default function Home() {
	return (
		<div className="w-full h-full">
			<h3 className="text-gray-800 text-sm capitalize pb-4">skill test</h3>
			<div className="flex gap-8">
				<div className="w-fit">
					<SkillTestCard />
					<QuickStatistics />
					<ComparisonGraph />
				</div>
				<div className="w-1/2">
					<SyllabusWiseAnalysis />
					<QuestionAnalysis correctAnswers={6} totalQuestions={10} />
				</div>
			</div>
		</div>
	);
}
