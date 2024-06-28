"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "KALAKRITI",
    description:
      " An Annual art and photography exhibition organised by STROKES. An exhibition of artistic talent, featuring the best works from our members in photography and painting.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/posters/kalakriti.jpg"  />
      </div>
    ),
  },
  {
    title: "RITRATTO",
    description:
      "Capture your vision! STROKES' annual online photo contest lets you showcase your skills in street, landscape, and indoor photography.",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img src="/Images/posters/ritratto.jpg"  />
      </div>
    ),
  },
  {
    title: "DOTS AND DASHES",
    description:
      "STROKES' online art competition lets you unleash your creativity! Explore categories like doodles, digital art, crafts, and sketching.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/dotsanddashes.jpg"  />
      </div>
    ),
  },
  {
    title: "PHOTOWALK",
    description:
      "Explore hidden gems with a camera in hand! These photo walks hone skills & build a community of visual storytellers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/posters/photowalk.jpg"  />
      </div>
    ),
  },
  {
    title: "LOKULUS",
    description:
      "A series of monochrome symmetric photos, emphasizing the beauty of simplicity and symmetry.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/posters/lokulus.jpg"  />
      </div>
    ),
  },
  {
    title: "PREQUAL",
    description:
      "Storytelling through digital art, blending narratives with visual creativity. This event emphasizes the power of art in conveying stories and emotions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/posters/prequal.jpg"  />
      </div>
    ),
  },
  {
    title: "REVERIE",
    description:
      "A nostalgic journey through the memories of our college, capturing the essence of student life.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/posters/reverie.jpg"  />
      </div>
    ),
  },
  {
    title: "INKJECTION",
    description:
      "A tattoo-making competition that challenges the creativity of our members.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/posters/inkjection.jpg"  />
      </div>
    ),
  },
  {
    title: "FREAMESHIFT",
    description:
      "Expressing human emotions through a series of illustrations and artworks.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/frameshift.jpg"  />
      </div>
    ),
  },
  {
    title: "MYRIAD",
    description:
      "Photographer or not we are always fascunated by the myriad of colours splashed over the horizon. This is a series that illuminates our dull day with shades of crimson and gold",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/myriad.jpg"  />
      </div>
    ),
  },
  {
    title: "UNCORKED",
    description:
      "Showcasing the art of bottle painting in a unique series. Members transform ordinary bottles into extraordinary pieces of art, demonstrating creativity and innovation.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/uncorked.jpg"  />
      </div>
    ),
  },
  {
    title: "CHITRAKALA",
    description:
      "Celebrating traditional Indian folk art through various series.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/chitrakala.jpg"  />
      </div>
    ),
  },
  {
    title: "QUARANTONES",
    description:
      "An exploration of cubism art, reflecting the creative expressions during quarantine.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/quarantones.jpg"  />
      </div>
    ),
  },
  {
    title: "CLICKANTINE",
    description:
      " Engaging the community with a focus on capturing candid moments and scenes.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/clickantine.jpg"  />
      </div>
    ),
  },
  {
    title: "THE VINCENT PALATTES",
    description:
      "An art series inspired by the styles and themes of Vincent van Gogh",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <img src="/Images/posters/thevincentpalattes.jpg"  />
      </div>
    ),
  },
  
  {
    title: "",
    description:
      "And a lot more.......",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Stay tuned
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <section id="events" className="p-10">
      <StickyScroll content={content} />
    </section>
  );
}
