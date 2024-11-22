import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
	return <div className="text-left mt-7 sm:px-6 px-3 leading-7 indent-3">{children}</div>;
}
