import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
	return <p className="text-left mt-8 px-6 leading-7 indent-3">{children}</p>;
}
