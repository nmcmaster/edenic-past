import {
	ArrowLeftIcon,
	ArrowRightIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Eof({
	hrefBackward,
	hrefForward,
	textForward,
	textBackward,
	isBeginning,
	isEnding,
}: {
	hrefBackward: string;
	hrefForward: string;
	textForward: string;
	textBackward: string;
	isBeginning?: boolean;
	isEnding?: boolean;
}) {
	return (
		<div className="flex justify-between mt-10 px-6">
			<Link href={hrefBackward}>
				<div className="flex">
					{isBeginning ? (
						<InformationCircleIcon className="w-6 h-6" />
					) : (
						<ArrowLeftIcon className="w-6 h-6" />
					)}
					<div className="ml-1.5">{textBackward}</div>
				</div>
			</Link>

			<Link href={hrefForward}>
				<div className="flex">
					<div>{textForward}</div>
					{isEnding ? (
						<InformationCircleIcon className="w-6 h-6" />
					) : (
						<ArrowRightIcon className="ml-1.5 block w-6 h-6" />
					)}
				</div>
			</Link>
		</div>
	);
}
