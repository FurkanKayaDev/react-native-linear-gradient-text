import React from "react";

export interface TextGradientProps {
  text: string;
  colors: string[];
  style?: React.CSSProperties;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
}
