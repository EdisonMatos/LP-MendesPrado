import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import WhatsappForm from "../interactives/WhatsappForm";

export default function Register() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="bg-bgSectionDark" paddingbot={false}>
      {/* <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color=""
      /> */}
      {/* <SectionShapeDiv shapeDivArrow shapeColor="text-white"/> */}
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-start">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            miniTitle={content.texts.register.miniTag}
            sectionHeaderTitle={content.texts.register.title}
            sectionHeaderSubtitle={content.texts.register.subtitle}
            color=""
            type=""
          />
        </MotionDivDownToUp>

        <Button
          aria-label={content.texts.register.altButtonCta}
          label={content.texts.register.ctaButtonText}
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScGiTvmt_9B5anoUvhmCpvg-1NUOoknzMKmjNOCVHvlx-kr1w/viewform"
          animation
        />
      </SectionWrapper>
    </SectionArea>
  );
}
