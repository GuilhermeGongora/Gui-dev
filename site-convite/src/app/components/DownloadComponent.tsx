import { motion } from "framer-motion";
import React from "react";

const DownloadResumeButton: React.FC = () => {
  const handleOpenPDF = () => {
    const pdfPath = "/CV_Guilherme_Gongora.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <>
      <motion.button
        onClick={handleOpenPDF}
        className="mt-4 bg-black text-[#00ff00] border-2 px-4 py-2 rounded-lg border-solid border-[#00ff00] shadow-md "
        whileHover={{ scale: 1.1, backgroundColor: "green", color: "white" }}
        whileTap={{ scale: 0.9 }}
      >
        Download CV
      </motion.button>
    </>
  );
};

export default DownloadResumeButton;
