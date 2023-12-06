<h1 align="center" >
  @furkankaya/react-native-linear-text-gradient
</h1>

<p align="center" >
  <img alt="NPM package version" src="https://img.shields.io/npm/v/@furkankaya/react-native-linear-text-gradient?style=for-the-badge">

  <img alt="NPM package downloads" src="https://img.shields.io/npm/dt/@furkankaya/react-native-linear-text-gradient?style=for-the-badge">
 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## About

A React Native component for rendering text with a beautiful linear gradient background

---
![light](https://github.com/FurkanKayaDev/react-native-linear-gradient-text/assets/103508575/2d4151c7-3b92-49cc-89b2-e3ea7a547515)

![dark](https://github.com/FurkanKayaDev/react-native-linear-gradient-text/assets/103508575/7d471612-e673-4737-ae07-b1567347c8f5)

## Installation

### Step 1: Install @react-native-masked-view/masked-view library

Make sure that you have installed the `@react-native-masked-view/masked-view` library:

- https://github.com/react-native-masked-view/masked-view#getting-started

### Step 2: Install react-native-linear-gradient library

Make sure that you have installed the `react-native-linear-gradient` library:

- https://github.com/react-native-linear-gradient/react-native-linear-gradient#installation

---

## Getting Started

```sh
yarn add @furkankaya/react-native-linear-text-gradient
# or
npm install @furkankaya/react-native-linear-text-gradient
```

---

## Usage

```js
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextGradient from "./src/textGradient";

const App = () => {
  return (
    <View style={styles.container}>
      <TextGradient
        style={{ fontWeight: "bold", fontSize: 30 }}
        locations={[0, 1]}
        colors={["red", "blue"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        text="THIS IS TEXT GRADIENT"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

---

## Props

| Prop   | Type                                                       | Default          | Description                                                                                                |
| ------ | ---------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| text   | string                                                     | **Required**     | An string that display text. Example: `text="Hello World"`                                                 |
| colors | string[]                                                   | **Required**     | An array of at least two color values that represent gradient colors. Example: `colors={["red", "blue"]}`. |
| start  | { x: number, y: number }                                   | { x: 0.5, y: 0 } | An optional prop. He declare the position that the gradient starts. Example `start={{ x: 0.5, y: 0 }}`.    |
| end    | { x: number, y: number }                                   | { x: 1, y: 0 }   | Same as start, but for the of the gradient.                                                                |
| style  | [TextStyle](https://reactnative.dev/docs/text-style-props) | Default Value    | A property to change all styles that a text has.                                                           |

---

## Author

  <h3>Furkan Kaya</h3>

<p align="left">
  <a href="https://www.linkedin.com/in/furkankaya98/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<p>

---

## License

This project is under the MIT license. See the [LICENSE](./LICENSE) to learn more.
<br>
