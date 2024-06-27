export interface ComparisonGraphProps {
	userPercentile: number;
}

export interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	title: string;
	rankLabel: string;
	percentileLabel: string;
	scoreLabel: string;
	onSave: (rank: number, percentile: number, score: number) => void;
}

export type PercentileGraphProps = {
	data: { percentile: number; count: number }[];
	userPercentile: number;
};

export interface QuestionAnalysisProps {
	correctAnswers: number;
	totalQuestions: number;
}

export interface QuickStatisticProps {
	rank: number;
	percentile: number;
	correctAnswers: number;
}

export interface SkillTestCardProps {
	onUpdate: (rank: number, percentile: number, score: number) => void;
}
