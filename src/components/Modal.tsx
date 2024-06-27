"use client";
import { ModalProps } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";

const Modal: React.FC<ModalProps> = ({
	isVisible,
	onClose,
	title,
	rankLabel,
	percentileLabel,
	scoreLabel,
	onSave,
}) => {
	const [rank, setRank] = useState(1);
	const [percentile, setPercentile] = useState(30);
	const [score, setScore] = useState(10);
	if (!isVisible) return null;

	const handleSave = () => {
		onSave(rank, percentile, score);
	};

	return (
		<div>
			<div
				className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
				onClick={onClose}
			></div>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
				<div className="bg-white p-4 rounded-lg xl:w-[30vw] md:w-[35vw] flex flex-col gap-2">
					<div className="flex items-center justify-between px-4 mb-2">
						<h3 className="font-extrabold text-lg capitalize">{title}</h3>
						<Image
							src={"/html.svg"}
							alt="image"
							width={100}
							height={100}
							className="w-8 h-8 object-cover"
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center">
								1
							</div>
							<h3 className="text-sm">
								Update your <span className="font-semibold">{rankLabel}</span>
							</h3>
						</div>
						<input
							type="number"
							required
							aria-errormessage="Required | Should be a number"
							inputMode="numeric"
							pattern="[0-9]*"
							className="w-40 h-8 border border-gray-600 rounded-lg bg-white p-2 appearance-none"
							onChange={(e: any) => setRank(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center">
								2
							</div>
							<h3 className="text-sm">
								Update your{" "}
								<span className="font-semibold">{percentileLabel}</span>
							</h3>
						</div>
						<input
							type="number"
							className="w-40 h-8 border border-gray-600 rounded-lg bg-white p-2 appearance-none"
							onChange={(e: any) => setPercentile(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center">
								3
							</div>
							<h3 className="text-sm">
								Update your <span className="font-semibold">{scoreLabel}</span>
							</h3>
						</div>
						<input
							type="number"
							className="w-40 h-8 border border-gray-600 rounded-lg bg-white p-2 appearance-none"
							onChange={(e: any) => setScore(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-end gap-2 mt-2">
						<button
							className="border border-gray-800 text-gray-800 px-4 py-2 rounded-lg"
							onClick={onClose}
						>
							Cancel
						</button>
						<button
							className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-1"
							onClick={handleSave}
						>
							Save
							<Image
								src="/arrow_right.svg"
								alt="Arrow"
								width={100}
								height={100}
								className="w-4 h-4 object-cover ml-1"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
