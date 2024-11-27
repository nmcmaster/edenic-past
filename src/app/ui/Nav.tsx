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
		<div className="flex text-md text-red-700 justify-between mt-5 sm:px-3 px-1">
			<Link href={hrefBackward}>
				<>
					<div>{textBackward}</div>
					{infoIconLeft ? (
						<InformationCircleIcon className="h-4 w-4" />
					) : (
						<ArrowLeftIcon className="h-4 w-4" />
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
							<InformationCircleIcon className="h-4 w-4" />
						) : (
							<ArrowRightIcon className="h-4 w-4 text-right" />
						)}
					</div>
				</>
			</Link>
		</div>
	);
}
