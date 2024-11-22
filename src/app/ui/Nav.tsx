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
}: {
	hrefBackward: string;
	hrefForward: string;
	textForward: string;
	textBackward: string;
}) {
	return (
		<div className="flex text-md sm:text-lg text-red-700 justify-between mt-5 sm:px-3 px-0.5">
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
