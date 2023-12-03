"use client";
import { cn } from "@/app/utils/cn";
import { Variants, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    y: -500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const AnimationOnScroll = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 1 },
        y: { duration: 1, ease: "easeInOut" },
      },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={controls}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#11111150",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex:9999
      }}
    />
  );
};

export default AnimationOnScroll;
