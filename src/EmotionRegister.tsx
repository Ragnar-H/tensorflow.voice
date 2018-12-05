import React, { Component } from "react";
import { Emotion } from "./emotions";
import styles from "./EmotionRegister.module.css";

interface Props {
  emotion: Emotion;
}
export class EmotionRegister extends Component<Props> {
  trainEmotion = () => {

  }
  render() {
    const { emotion } = this.props;
    return (
      <button
        className={[
          styles.emotionRegister,
          emotion === "positive" ? styles.positive : styles.negative
        ].join(" ")}
      >
        press me to train {emotion}
      </button>
    );
  }
}
