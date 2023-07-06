import { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";

import { cls } from "@/utils";

interface Props {
  listIdx: number;
  title: string;
  desc: string;
  thumbnailImg: string;
  currentOpenArticleIdx: number;
  setCurrentOpenArticleIdx: Dispatch<SetStateAction<number>>;
}

const Article = ({ listIdx, title, desc, thumbnailImg, currentOpenArticleIdx, setCurrentOpenArticleIdx }: Props) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const openSpring = { type: "spring", stiffness: 200, damping: 30 };
  const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

  return (
    <motion.li
      ref={containerRef}
      transition={{ duration: 0.3 }}
      className="relative flex-[1_1_auto] md:flex-[1_1_40%] xl:flex-[1_1_30%] md:max-w-[48.5%] xl:max-w-[38.5%] h-[112vw] md:h-[400px]"
    >
      {/* Overlay */}
      <motion.div
        onClick={() => setCurrentOpenArticleIdx(-1)}
        initial={false}
        animate={{ opacity: currentOpenArticleIdx === listIdx ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: currentOpenArticleIdx === listIdx ? "auto" : "none" }}
        className="[Overlay] fixed z-20 bg-black/40 top-0 left-0 w-screen h-screen"
      />

      {/* Card content */}
      <article
        onClick={() => setCurrentOpenArticleIdx(listIdx)}
        className={cls(
          "[card-content-container]",
          " flex items-center justify-center",
          currentOpenArticleIdx === listIdx
            ? "fixed top-0 left-0 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] z-20 w-fit h-auto"
            : "relative block w-full h-full"
        )}
      >
        <button className="absolute top-5 right-5">X</button>
        <motion.div
          ref={cardRef}
          layout
          transition={{ layout: currentOpenArticleIdx === listIdx ? openSpring : closeSpring }}
          className={cls(
            "[card-content]",
            "relative",
            "overflow-hidden m-auto",
            currentOpenArticleIdx === listIdx
              ? "h-auto max-w-[700px] bg-blue-900 md:rounded-[20px]"
              : " bg-slate-900 w-full h-full rounded-[20px]"
          )}
        >
          <div className="w-full aspect-square md:h-[320px] bg-white/5" />
          <div className="px-4 py-3">
            <p className="font-AppleSDGothicNeoM text-[20px]">{title}</p>
            <p className="mb-4">sub title</p>
            <p>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            </p>
            <br />
            <p>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            </p>
          </div>
        </motion.div>
      </article>
    </motion.li>
  );
};

export default Article;
