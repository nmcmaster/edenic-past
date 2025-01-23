"use client";
import { useState } from "react";
import Footnote from "./Footnote";

export default function FootnoteProvider({
	footnotes,
	children,
}: {
	footnotes: string[];
	children: (props: {
		showFootnote: (number: number) => void;
	}) => React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [number, setNumber] = useState(0);

	const showFootnote = (num: number) => {
		setNumber(num);
		setIsOpen(true);
	};

	return (
		<>
			<Footnote
				isOpen={isOpen}
				text={footnotes[number]}
				number={number}
				setIsOpen={setIsOpen}
			/>
			{children({ showFootnote })}
		</>
	);
}
