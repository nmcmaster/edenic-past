"use client";
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import {
	iframeStyle,
	paragraphBottomMargin,
	playerCss,
	playerHeight,
	pullQuote,
} from "@/app/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Beria() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<>
			<div style={playerHeight}>
				{isMounted && (
					<iframe
						style={iframeStyle}
						className={playerCss}
						src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=3468900866/transparent=true/"
						seamless
					>
						<a href="https://edenicpast.bandcamp.com/album/red-amarcord">
							Red Amarcord by Edenic Past
						</a>
					</iframe>
				)}
			</div>
			<Nav
				hrefBackward="/red-amarcord/for-brandon-chase"
				hrefForward="/red-amarcord/kolyma"
				textBackward="For Brandon Chase"
				textForward="Kolyma"
			/>
			<BodyText>
				<p className={paragraphBottomMargin}>
					It is May 2020 and I am reading about Beria. I am reading
					Ryszard Kapuściński’s{" "}
					<span className="italic">Imperium</span>. For about 10
					months in 2003-2004 I lived in Krakow, Poland. When I left
					for good, I bought a slim paperback in the Warsaw airport,
					just to have something to read on the plane. It was
					Kapuściński’s{" "}
					<span className="italic">Another Day of Life.</span> The
					book is his account of three months of the Angolan Civil War
					in 1975, which he was reporting on for the Polish Press
					Agency.
				</p>
				<p className={paragraphBottomMargin}>
					Portugal experienced a revolution in 1974 which overthrew
					the Salazar dictatorship. The new leaders had no interest in
					pursuing the Portuguese colonial project, and so an exodus
					began. Kapuściński reports that the Portuguese inhabitants
					of Luanda were convinced that they would be slaughtered
					wholesale when the independence movements fighting one
					another in the south of the country reached them in the
					capital. The bill for hundreds of years of colonial
					occupation coming due, so to speak. He describes how the
					city of Luanda gets a sibling, a “wooden city” of shipping
					crates filling every street and sidewalk. The old city is
					moved into the wooden city, and the wooden city is moved
					onto ships headed for Portugal. This despite the fact that
					many of these Angolan-born Portuguese people have never been
					to their “home” country to which they are now retreating.
				</p>{" "}
				<p className={paragraphBottomMargin}>
					Kapuściński himself heads south, to the front. This is his
					general approach: when all the (white) people are fleeing a
					situation, he heads towards it. There is something of Hunter
					S. Thompson’s gonzo journalism in his approach, minus the
					drugs and self-indulgence.{" "}
					<span className="italic">Another Day of Life</span> is also
					fascinating as a depiction of a Cold War proxy conflict: the
					two opposing factions in the civil war, the FNLA and MPLA,
					are backed by America (aided by apartheid South Africa) and
					the Soviet Union (aided by Cuba). Kapuściński, as a Polish
					journalist, is more welcome among the MPLA. Upon being
					stopped on the road by yet another band of armed men, he is
					relieved to recognize among them (from their accented
					Spanish) advisors from the Cuban special forces.
				</p>{" "}
				<p className={paragraphBottomMargin}>
					{" "}
					In <span className="italic">Imperium</span>, Kapuściński
					turns his reporting to home. Well, sort of his home. The
					basic point of the book is that when we think of
					colonialism, we tend to think of the British Empire and
					those of other western European countries (and the US), but
					the Russian imperial project is at least as significant.
					With the dissolution of the Soviet Union in the early ‘90s,
					it’s clear that the Imperium is at either an end or a major
					inflection point. As in Angola, in Honduras, in Ethiopia, he
					wants to see the country while the transition is fresh, and
					so he travels to key locations in Russia and its former
					vassal states.
				</p>{" "}
				<p className={paragraphBottomMargin}>
					{" "}
					But for the first entry he didn’t have to travel anywhere.
					The Imperium came to him when he was 7 years old, when the
					Red Army invaded Poland in 1939. Kapuściński relates his
					childlike impressions as deportations of neighbors and
					friends (eventually, his elementary school teacher) begin.
					As the famine begins. His mother gives all the available
					food to her children, taking nothing for herself, but must
					leave the kitchen for these meals. She is doing the right
					thing for her kids but, as she is starving herself, it is
					too much to watch them eat. It’s almost too fitting that his
					hometown of Pińsk, where this took place, is currently not
					Poland but Belorussia– the kind of capricious post-colonial
					border jockeying he would’ve recognized from Africa.
				</p>{" "}
				<p className={paragraphBottomMargin}>
					But those deportations, the topic of obsessive discussion
					among the schoolchildren, some of whom have even snuck out
					to the railroad tracks and watched the dejected people being
					offloaded from wagons and stuffed into train cars “using
					knees and rifle butts so that there would be no room left
					even for a pin.” These Poles are being deported to the labor
					camps in Siberia or to the Caucasus, where they will face
					poverty and hunger, separated from everything they have ever
					known.
				</p>{" "}
				<p className={paragraphBottomMargin}>
					Who is directing these deportations? Lavrentiy Beria, the
					head of the NKVD in 1939. Beria didn’t begin Stalin’s great
					purge and may have even prosecuted it with slightly more
					restraint than his predecessor, but the human toll of all
					the interrogation beatings, gulag deportations, and outright
					executions he oversaw is still vast. He has Garanin, an
					equally murderous overseer of the Kolyma labor camp,
					executed “for obscure reasons.” He organized the Katyn
					massacre of Polish officialdom. Beria dances throughout
					<span className="italic">Imperium</span>, as Kapuściński
					encounters evidence of his handiwork and that of the NKVD on
					his travels.
				</p>{" "}
				<p className={paragraphBottomMargin}>
					But the situation which Kapuściński describes in the most
					detail is one in which Beria is a victim. He relates the
					story told in a book he refers to as{" "}
					<span className="italic">Beria: The End of the Career</span>
					. In 1953 Stalin had been dead for four months, and his
					successor Khrushchev worried that Beria would kill him and
					seize power himself. So he assembled a posse which cornered
					Beria at a meeting of the Political Bureau. He may not even
					have been planning his own coup: Marshal Georgy Zhukov, who
					physically arrested Beria, said that in the moment he “was
					pale, very pale. And stunned.” They snuck him out of the
					Kremlin wrapped in a carpet to hide the arrest from his
					staff.
				</p>{" "}
				<div className={pullQuote}>
					<div>
						{" "}
						“Then they tried Beria—not for his crimes, but for
						wanting to seize power. And they immediately shot him.”
					</div>
					<div className="text-right text-sm">
						Ryszard Kapuściński,{" "}
						<span className="italic">Imperium</span>
					</div>
				</div>
				<div className="border-b border-black mx-9 mb-3"></div>
				<p className={paragraphBottomMargin}>
					{" "}
					It is May 2020 and I am making short songs with bass and
					drum programming. The Menegroth extended family had been
					entertaining ourselves making purposefully moronic death
					metal, but among the setups in the joke band is one I think
					has real potential. I can write the songs, program the
					drums, record the bass, and add samples/special
					effects/whatever. Get it that far along. Send these short,
					intense bursts of bass and machine drums to Colin. Colin can
					handle the guitar (and ultimately engineer/mix the album).
					Send the instrumentals to Paulo, Paulo’s vocal approach is
					perfect. It’s a complete circuit. I am making these short
					songs with bass and fake drums and I can’t stop thinking
					about Ryszard Kapuściński, traveling to Kolyma by train
					while reading a book about Beria.
					<Link
						href="/red-amarcord/kolyma"
						className="text-red-700 ml-2"
					>
						NEXT
					</Link>
				</p>
			</BodyText>
		</>
	);
}
