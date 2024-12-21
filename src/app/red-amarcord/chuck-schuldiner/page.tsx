"use client";
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import Title from "@/app/ui/Title";
import {
	iframeStyle,
	paragraphBottomMargin,
	playerCss,
	playerHeight,
} from "@/app/utils/constants";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
/* eslint-disable react/no-unescaped-entities */
export const metadata: Metadata = {
	title: "Edenic Past - Chuck Schuldiner",
	description:
		"But a dark streak runs through Schuldiner’s history. The documentary 'Death by Metal' catalogs several instances of tours abruptly cancelled, managers and bandmates suddenly fired...",
};

export default function ChuckSchuldiner() {
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
						src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=4164927008/transparent=true/"
						seamless
					>
						<a href="https://edenicpast.bandcamp.com/album/red-amarcord">
							Red Amarcord by Edenic Past
						</a>
					</iframe>
				)}
			</div>
			<Title title="Chuck Schuldiner" />
			<Nav
				hrefBackward="/red-amarcord/the-connection-between-bruno-schulz-and-the-holodomor"
				hrefForward="/red-amarcord/litvinenko"
				textBackward="Holodomor"
				textForward="Litvinenko"
			/>
			<BodyText>
				<div className={paragraphBottomMargin}>
					Charles Michael Schuldiner was born in 1967 in Long Island,
					New York. In 1983 he founded the band Death (initially under
					the name Mantas) in Florida. Death was part of and arguably
					led the first wave of death metal bands, many of which were
					based in Florida at that time. The discography of Death can
					be seen as a shorthand for the stylistic progression of the
					genre in general: initial albums{" "}
					<span className="italic">Scream Bloody Gore</span>,{" "}
					<span className="italic">Leprosy</span>, and{" "}
					<span className="italic">Spiritual Healing</span> are
					morbid, guttural takes on the preceding genre of thrash
					metal, though the musical sophistication ticks up with each
					successive effort. The following albums{" "}
					<span className="italic">Human</span> and{" "}
					<span className="italic">Individual Thought Patterns</span>{" "}
					introduce elements from jazz and neoclassical guitar
					traditions, essentially starting the technical death metal
					subgenre. The final records{" "}
					<span className="italic">Symbolic</span> and{" "}
					<span className="italic">The Sound of Perseverance</span>{" "}
					take a turn to Chuck's personal taste, incorporating sounds
					from power metal and progressive hard rock. It is difficult
					to name another individual with so much influence over so
					much of the genre.
				</div>
				<div className={paragraphBottomMargin}>
					{" "}
					But a dark streak runs through Schuldiner’s history. The
					documentary <span className="italic">
						Death by Metal
					</span>{" "}
					(2016) catalogs several instances of tours abruptly
					cancelled, managers and bandmates suddenly fired. In 1990
					Chuck personally refused to participate in a European tour
					with German Thrash act Kreator; because of contractual
					obligations, drummer Bill Andrews and bassist Terry Butler
					did the tour anyway as Death, with two Kreator roadies
					filling out the band. Drummer Sean Reinert recalls learning
					he was no longer part of the Death lineup when bassist Steve
					DiGiorgio called him from a rehearsal informing him that
					Gene Hoglan was there playing drums with the band.
				</div>{" "}
				<div className={paragraphBottomMargin}>
					{" "}
					There is a musical argument to be made for the replacement
					of band members almost every album, one made by Albert
					Mudrian of <span className="italic">Decibel</span> magazine
					in <span className="italic">Death by Metal</span>: that
					Chuck was artistically moving quite quickly, changing the
					concept of Death so rapidly that the members he’d recruited
					for one iteration weren’t suited musically to the next. This
					is understandable and to a degree honorable. We all are glad
					the Death albums are what they are, that the progression
					over the discography is what it is and that he didn’t slow
					or dilute his vision just to avoid hurting his bros’
					feelings. And most of Death’s existence happened when Chuck
					was in his 20s, a period when many of us (certainly me) are
					mercurial and unreliable. We are robbed by the brain cancer
					that claimed him at the age of 34 from ever knowing how he
					would reflect on or recast these moments given the benefits
					of age and hindsight.
				</div>{" "}
				<div className={paragraphBottomMargin}>
					{" "}
					In interviews Chuck frequently spoke of not wanting to be
					limited by the gore-oriented death metal sound that Death
					had become famous for early on; he expresses the desire to
					grow, to not be “put in a box” again and again. Certainly,
					the early innovation of death metal was very quickly
					codified into a formula; fans and labels would bristle at
					deviation from it. Such pressures on a young and restlessly
					creative musician would feel quite constraining. But some of
					it seems to have been purely personal factors. Steve
					DiGiorgio says in{" "}
					<span className="italic">Death by Metal</span> that Chuck
					was “wound tighter than most people,” and in fact he and
					Gene Hoglan, part of the small group of musicians to play on
					two consecutive Death albums, seem to have achieved that
					mostly by virtue of being good at calming Chuck down.
					Sensing he was near the snapping point that, left unchecked
					by previous band members, had led to the blowups in which
					tours were abandoned and musicians or managers fired.
				</div>{" "}
				<div className={paragraphBottomMargin}>
					{" "}
					I wonder if there wasn’t one more bit of agitation causing
					Chuck to be wound tighter than most. As a bisexual man who’s
					watched a lot of Death interviews, I want to claim him as
					one of our own. He was prone to acts of light aesthetic
					rebellion against metal orthodoxy, such as wearing a shirt
					festooned with cats to a TV interview; most of these also
					read as somewhat effeminate. Explicit homoeroticism was a
					huge no-no in metal during his lifetime. I caught the tail
					end of this era– I’d say the metal community’s default
					attitude towards LGBQT turned from default negative to
					default acceptance in the early 2010’s, following a larger
					movement in American culture. I used to worry in the early
					days of my musical journey about being outed on some message
					board. If he was indeed queer, being forced to be closeted
					either by his own mind or social pressures of his community
					would add another layer of tension to his psyche. It’s
					impossible to know, and some might say it’s irresponsible
					for me to speculate like this, but to me it’s just one more
					possible factor contributing to the psychology of this
					brilliant, complicated artist who burned so brightly but not
					for very long. Hail Chuck.
				</div>
			</BodyText>
		</>
	);
}
