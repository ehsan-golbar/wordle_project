import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setSelectedWord } from "../store/slices/SelectedWordSlice";

function WordSelection() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchWordsFromFile = async () => {
      try {
        const response = await fetch("../../wordle-bank.txt");

        if (!response.ok) {
          throw new Error("Failed to fetch the file");
        }

        const text = await response.text();

        const wordsArray = text
          .split("\n")
          .map((word) => word.trim())
          .filter((word) => word.length > 0);

        if (wordsArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * wordsArray.length);
          const word = wordsArray[randomIndex];

          dispatch(setSelectedWord(word));
        } else {
        }
      } catch (error) {}
    };

    fetchWordsFromFile();
  }, []);

  return <div></div>;
}

export default WordSelection;
