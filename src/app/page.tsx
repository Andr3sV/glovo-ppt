"use client";

import { Presentation } from "@/components/Presentation";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { IndexSlide } from "@/components/slides/IndexSlide";
import {
  Caso1Slide1,
  Caso1Slide2,
  Caso1Slide4,
  Caso1Slide5,
  Caso1Slide6,
} from "@/components/slides/Caso1Slides";
import {
  Caso2Slide1,
  Caso2Slide2,
  Caso2Slide3,
  Caso2Slide4,
} from "@/components/slides/Caso2Slides";
import {
  Caso3Slide1,
  Caso3Slide2,
  Caso3Slide3,
  Caso3Slide4,
  Caso3Slide5,
} from "@/components/slides/Caso3Slides";
import {
  Caso4Slide1,
  Caso4Slide2,
  Caso4Slide3,
  Caso4Slide5,
  Caso4Slide6,
} from "@/components/slides/Caso4Slides";
import {
  Caso5Slide1,
  Caso5Slide2,
  Caso5Slide3,
  Caso5Slide5,
  Caso5Slide6,
} from "@/components/slides/Caso5Slides";
import {
  Caso6Slide1,
  Caso6Slide2,
  Caso6Slide3,
  Caso6Slide4,
  Caso6Slide5,
  Caso6Slide6,
} from "@/components/slides/Caso6Slides";
import { SlideCard } from "@/components/SlideCard";

export default function Home() {
  return (
    <Presentation>
      <TitleSlide />
      <IndexSlide />

      {/* CASO 1 */}
      <Caso1Slide1 />
      <Caso1Slide2 />
      <Caso1Slide4 />
      <Caso1Slide5 />
      <Caso1Slide6 />

      {/* CASO 2 */}
      <Caso2Slide1 />
      <Caso2Slide2 />
      <Caso2Slide3 />
      <Caso2Slide4 />

      {/* CASO 3 */}
      <Caso3Slide1 />
      <Caso3Slide2 />
      <Caso3Slide3 />
      <Caso3Slide4 />
      <Caso3Slide5 />

      {/* CASO 4 */}
      <Caso4Slide1 />
      <Caso4Slide2 />
      <Caso4Slide3 />
      <SlideCard header="AI Chatbot – Continued">
        <p className="text-glovo-dark text-center py-8">Technical measures & user rights implementation (see previous slide)</p>
      </SlideCard>
      <Caso4Slide5 />
      <Caso4Slide6 />

      {/* CASO 5 */}
      <Caso5Slide1 />
      <Caso5Slide2 />
      <Caso5Slide3 />
      <Caso5Slide5 />
      <Caso5Slide6 />

      {/* CASO 6 */}
      <Caso6Slide1 />
      <Caso6Slide2 />
      <Caso6Slide3 />
      <Caso6Slide4 />
      <Caso6Slide5 />
      <Caso6Slide6 />
    </Presentation>
  );
}
