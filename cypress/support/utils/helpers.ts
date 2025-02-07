import word from "../../../fixtures/quiz.json";
import { Game } from "../types";

export const maskLettersInWord = (quiz: string) => {
  return quiz.replace(/[A-Za-z]/g, '_');
}

export const mockState: Game = {
  id: '60d5f2d8bc2d7e2b1c2b6c5d',
  maskedWord: maskLettersInWord(word.text),
  guesses: [],
  isCorrect: false,
  isComplete: false,
  isWinner: false,
  solution: word.text,
  guessesRemaining: 9
}


