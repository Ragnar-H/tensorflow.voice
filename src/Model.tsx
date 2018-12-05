import * as speechCommands from "@tensorflow-models/speech-commands";
import { SpeechCommandRecognizer } from "@tensorflow-models/speech-commands/dist/types";

let _recognizer: SpeechCommandRecognizer | null = null;

export async function loadModel() {
  _recognizer = speechCommands.create("BROWSER_FFT", "directional4w");
  await _recognizer.ensureModelLoaded();
}

export function isModelLoaded() {
  return _recognizer !== null;
}

export function getRecognizer() {
  return _recognizer;
}
