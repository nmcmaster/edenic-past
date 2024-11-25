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
	infoIconLeft,
	infoIconRight,
}: {
	hrefBackward: string;
	hrefForward: string;
	textForward: string;
	textBackward: string;
	infoIconLeft?: boolean;
	infoIconRight?: boolean;
}) {
	return (
		<div className="flex text-md sm:text-lg text-red-700 justify-between mt-5 sm:px-3 px-1">
			<Link href={hrefBackward}>
				<>
					<div>{textBackward}</div>
					{infoIconLeft ? (
						<InformationCircleIcon className="h-5 w-5" />
					) : (
						<ArrowLeftIcon className="h-5 w-5" />
					)}
				</>
			</Link>
			<Link href={hrefForward}>
				<>
					{" "}
					<div>{textForward}</div>{" "}
					<div className="flex justify-end">
						{" "}
						{infoIconRight ? (
							<InformationCircleIcon className="h-5 w-5" />
						) : (
							<ArrowRightIcon className="h-5 w-5 text-right" />
						)}
					</div>
				</>
			</Link>
		</div>
	);
}
