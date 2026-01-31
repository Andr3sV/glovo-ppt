"use client";

import { Presentation } from "@/components/Presentation";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { IndexSlide } from "@/components/slides/IndexSlide";
import { ScenarioIntroSlide } from "@/components/slides/Scenario1IntroSlide";
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
import { ThankYouSlide } from "@/components/slides/ThankYouSlide";
export default function Home() {
  return (
    <Presentation>
      <TitleSlide />
      <IndexSlide />
      <ScenarioIntroSlide num={1} title="Scenario" description="Launch Global Data Protection Compliance" />

      {/* CASO 1 */}
      <Caso1Slide1 />
      <Caso1Slide2 />
      <Caso1Slide4 />
      <Caso1Slide5 />
      <Caso1Slide6 />
      <ScenarioIntroSlide num={2} title="Scenario" description="Glovo Group Privacy Structure" />

      {/* CASO 2 */}
      <Caso2Slide1 />
      <Caso2Slide2 />
      <Caso2Slide3 />
      <Caso2Slide4 />

      <ScenarioIntroSlide num={3} title="Scenario" description="Breach Response Playbook" />

      {/* CASO 3 */}
      <Caso3Slide1 />
      <Caso3Slide2 />
      <Caso3Slide3 />
      <Caso3Slide4 />
      <Caso3Slide5 />

      <ScenarioIntroSlide num={4} title="Scenario" description="AI Chatbot Risk Assessment" />

      {/* CASO 4 */}
      <Caso4Slide1 />
      <Caso4Slide2 />
      <Caso4Slide3 />
      <Caso4Slide5 />
      <Caso4Slide6 />

      <ScenarioIntroSlide num={5} title="Scenario" description="Parrot Legal Memo" />

      {/* CASO 5 */}
      <Caso5Slide1 />
      <Caso5Slide2 />
      <Caso5Slide3 />
      <Caso5Slide5 />
      <Caso5Slide6 />

      <ScenarioIntroSlide num={6} title="Scenario" description="Enable Safe App Ads Now" />

      {/* CASO 6 */}
      <Caso6Slide1 />
      <Caso6Slide2 />
      <Caso6Slide3 />
      <Caso6Slide4 />
      <Caso6Slide5 />
      <Caso6Slide6 />

      <ThankYouSlide />
    </Presentation>
  );
}
