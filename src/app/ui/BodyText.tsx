import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
	return <div className="text-left mt-7 px-6 leading-7 indent-3">{children}</div>;
}