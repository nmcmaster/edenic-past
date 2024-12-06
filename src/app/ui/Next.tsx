import Link from "next/link";

const Next = ({ href }: { href: string }) => (
	<Link href={href} className="text-red-700 ml-0.5">
		NEXT
	</Link>
);

export default Next;
