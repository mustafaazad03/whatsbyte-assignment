"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

interface SkillTestCardProps {
	onUpdate: (rank: number, percentile: number, score: number) => void;
}

const SkillTestCard: React.FC<SkillTestCardProps> = ({ onUpdate }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleOpenModal = () => {
		setIsModalVisible(true);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
	};

	const handleSave = (rank: number, percentile: number, score: number) => {
		onUpdate(rank, percentile, score);
		handleCloseModal();
	};
	return (
		<div className="flex flex-col gap-3 w-full">
			<div className="flex sm:items-center sm:flex-row flex-col sm:gap-2 gap-4 border border-gray-200 rounded-lg p-4 py-6">
				<div className="flex items-center gap-2 w-full">
					<Image
						src="/html.svg"
						alt="html logo"
						width={100}
						height={100}
						className="lg:w-16 w-12 h-auto object-contain"
					/>
					<div className="text-left space-y-1 px-1">
						<h2 className="font-extrabold capitalize">
							hyper text markup language
						</h2>
						<div className="flex items-center gap-1 text-gray-800 text-sm lg:text-base">
							<span className="">Questions: 08</span> |
							<span className="">Duration: 15 mins</span> |
							<span className="">Submitted on 5 June 2021</span>
						</div>
					</div>
				</div>
				<button
					type="button"
					className="bg-gray-800 text-white lg:px-6 py-2 px-4 text-sm lg:text-base font-semibold rounded-lg ring ring-slate-800"
					onClick={handleOpenModal}
				>
					Update
				</button>
			</div>
			<Modal
				isVisible={isModalVisible}
				onClose={handleCloseModal}
				title="Update Scores"
				rankLabel="Rank"
				percentileLabel="Percentile"
				scoreLabel="Current Score (out of 15)"
				onSave={handleSave}
			/>
		</div>
	);
};

export default SkillTestCard;
