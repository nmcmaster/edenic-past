import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
	return <div className="text-left text-md mt-4 sm:px-4 px-1.5 leading-relaxed indent-3">{children}</div>;
}
