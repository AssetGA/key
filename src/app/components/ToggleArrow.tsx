"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // можно заменить на свою стрелку

type propsType = {
  open: boolean;
};

export default function ToggleArrow({ open }: propsType) {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </div>
  );
}
