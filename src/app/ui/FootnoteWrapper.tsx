"use client";

import { useState } from "react";
import Footnote from "./Footnote";

interface FootnoteWrapperProps {
    text: string;
    number: number;
    children: React.ReactNode;
}

export default function FootnoteWrapper({ text, number, children }: FootnoteWrapperProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span>
            <button 
                onClick={() => setIsOpen(true)}
                className="text-red-700 align-super text-xs hover:text-red-800"
            >
                {children}
            </button>
            <Footnote 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                text={text}
                number={number}
            />
        </span>
    );
}
