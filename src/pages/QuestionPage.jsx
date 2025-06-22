// QuestionPage.jsx
import { motion, useInView, AnimatePresence } from "motion/react";
import { MessengerFAQ } from "../components/ui/FAQChat.jsx";

import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";

const words = [
  {
    text: "CÂU",
    className: "font-HP tracking-wider text-primary",
  },
  {
    text: "HỎI",
    className: "font-HP tracking-wider text-primary",
  },
  {
    text: "THƯỜNG",
    className: "font-HP tracking-wider",
  },
  {
    text: "GẶP",
    className: "font-HP tracking-wider",
  },
];
const QuestionPage = () => {
  const ref = useRef(null);
  const isViewed = useInView(ref, { once: true });
  return (
    <motion.div
      id="question"
      ref={ref}
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-base-300 py-36"
    >
      <AnimatePresence mode="wait">
        {isViewed && (
          <>
            <motion.div className="flex flex-col justify-center items-center gap-24 ">
              <motion.div
                intial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ root: ref }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold z-10"
              >
                <TypewriterEffect words={words} />
              </motion.div>
              <MessengerFAQ />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="font-HP text-center z-10 text-2xl lg:text-3xl uppercase flex flex-col font-bold mt-20 px-10">
        <span className="text-primary">Đã hết thời hạn đăng ký</span>
        <span>
          Cảm ơn bạn đã quan tâm và hẹn gặp lại bạn tại Codefest mùa tiếp theo!
        </span>
      </div>
    </motion.div>
  );
};

export default QuestionPage;
