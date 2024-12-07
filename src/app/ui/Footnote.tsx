import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

const Footnote = ({song, number}: {song: string, number: string}) => {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel className="max-w-lg space-y-4 border bg-gray-100 rounded-2xl px-10 py-8">
						<DialogTitle className="font-bold">{number}</DialogTitle>
						<Description>
							This will permanently deactivate your account
						</Description>
						<p>
							Are you sure you want to deactivate your account?
							All of your data will be permanently removed.
						</p>

						<button onClick={() => setIsOpen(false)}>Close footnote</button>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
};

export default Footnote;
