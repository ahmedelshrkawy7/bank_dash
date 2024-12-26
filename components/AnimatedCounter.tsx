"use client";
import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} prefix="USD" />
    </div>
  );
};

export default AnimatedCounter;
