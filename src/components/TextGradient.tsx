import React from "react";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { TextGradientProps } from "../types/types";

const TextGradient: React.FC<TextGradientProps> = ({
  text,
  colors,
  style = {},
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  locations = [0, 1],
}) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: "transparent" }]}>{text}</Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        locations={locations}
      >
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default TextGradient;
