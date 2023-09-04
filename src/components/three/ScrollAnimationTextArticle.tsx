import { cls } from "@/utils";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

interface SectionProps {
  children: React.ReactNode;
  position?: "left" | "right" | "center";
  sectionOpacity: number;
}
const Section = ({ children, position, sectionOpacity }: SectionProps) => {
  return (
    <section
      style={{ opacity: sectionOpacity }}
      className={cls(
        "w-full h-screen flex flex-col justify-center p-10",
        position === "left" ? "items-start" : position === "right" ? "items-end" : "items-center"
      )}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="border rounded-lg px-8 py-12">{children}</div>
        </div>
      </div>
    </section>
  );
};

const ScrollAnimationTextArticle = () => {
  const scroll = useScroll();
  const [firstsectionOpacity, setfirstSectionOpacity] = useState(1);
  const [secondsectionOpacity, setSecondSectionOpacity] = useState(1);
  const [thirdsectionOpacity, setThirdSectionOpacity] = useState(1);

  useFrame(() => {
    setfirstSectionOpacity(1 - scroll.range(0, 1 / 3));
    setSecondSectionOpacity(scroll.curve(1 / 3, 1 / 3));
    setThirdSectionOpacity(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section position="right" sectionOpacity={firstsectionOpacity}>
          <span className="font-AppleSDGothicNeoR text-2xl">This is page 1</span>
        </Section>
        <Section position="left" sectionOpacity={secondsectionOpacity}>
          <span className="font-AppleSDGothicNeoR text-2xl">This is page 2</span>
        </Section>
        <Section position="center" sectionOpacity={thirdsectionOpacity}>
          <span className="font-AppleSDGothicNeoR text-2xl">This is page 3</span>
        </Section>
      </div>
    </Scroll>
  );
};

export default ScrollAnimationTextArticle;
