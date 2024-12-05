import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
	return <div className="text-left text-md mt-7 sm:px-4 px-2 leading-7 indent-3">{children}</div>;
}
