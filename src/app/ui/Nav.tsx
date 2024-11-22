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
		<div className="flex text-sm sm:text-md text-red-700 justify-between mt-5 px-3">
			<Link href={hrefBackward}>
				<div className="flex">
				
					<div >{textBackward}</div>
				</div>
			</Link>

			<Link href={hrefForward}>
				<div className="flex">
					<div>{textForward}</div>
				
				</div>
			</Link>
		</div>
	);
}
