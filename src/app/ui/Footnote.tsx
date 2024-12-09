/* eslint-disable react/no-unescaped-entities */
import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Footnote = ({
	isOpen,
	text,
    number,
	setIsOpen,
}: {
	isOpen: boolean;
	text: string;
    number: number;
	setIsOpen: (arg: boolean) => void;
}) => {
	return (
		<>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-end justify-center">
					<DialogPanel className="max-w-lg space-y-4 border bg-gray-100 rounded-t-2xl px-10 pt-6 pb-8 relative shadow-lg">
						<DialogTitle className="font-bold text-xl">
							{number.toString()}
						</DialogTitle>
						<Description className="">
					{text}
						</Description>

						<button
							className="absolute top-2 right-7"
							onClick={() => setIsOpen(false)}
						>
							<XCircleIcon className="w-6 text-red-700" />
						</button>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
};

export default Footnote;
