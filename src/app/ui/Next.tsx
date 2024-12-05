import Link from "next/link";

const Next = ({ href }: { href: string }) => (
	<Link href={href} className="text-red-700 ml-2">
		NEXT
	</Link>
);

export default Next;
