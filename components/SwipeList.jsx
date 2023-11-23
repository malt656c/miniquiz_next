"use client";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import SwipeCard from "./SwipeCard";
import { useState } from "react";

export default function SwipeList(props) {
  /* states */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentStyles, setCurrentStyles] = useState({
    opacity: 1,
    rotation: `rotate(${0}deg)`,
    translate: 0,
  });
  const [lastQuestion, setLastQuestion] = useState([]);
  const [currentFilters, setCurrentFilters] = useState([]);
  /* definition af content */
  const quizContent = props.content;
  let Question = quizContent[currentQuestion];
  let rightAnswer = Question?.svarListe[1];
  let leftAnswer = Question?.svarListe[0];
  /* funktion for når quizzen er slut */

  /* funktion for swipe til højre */
  const SwipeRight = () => {
    if (leftAnswer.nextQuestion == "end") {
      props.OnEnd(currentFilters);
    } else setCurrentQuestion(rightAnswer.nextQuestion);
    setLastQuestion(lastQuestion.concat(currentQuestion));
    setCurrentStyles({
      opacity: 0,
      rotation: `rotate(${0}deg)`,
      translate: "100%",
    });
    setTimeout(() => {
      setCurrentStyles({
        opacity: 1,
        rotation: `rotate(${0}deg)`,
        translate: 0,
      });
      console.log(lastQuestion);
    }, 500);
    setCurrentFilters(currentFilters.concat([rightAnswer?.filter]));
  };
  const SwipeRightActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => SwipeRight()}>&nbsp;</SwipeAction>
    </LeadingActions>
  );
  /* funktion for swipe til venstre */
  const SwipeLeft = () => {
    if (leftAnswer.nextQuestion == "end") {
      props.OnEnd(currentFilters);
    } else setCurrentQuestion(leftAnswer.nextQuestion);
    setLastQuestion(lastQuestion.concat(currentQuestion));
    setCurrentStyles({
      opacity: 0,
      rotation: `rotate(${0}deg)`,
      translate: "-100%",
    });
    setTimeout(() => {
      setCurrentStyles({
        opacity: 1,
        rotation: `rotate(${0}deg)`,
        translate: 0,
      });
      console.log(lastQuestion);
    }, 500);
    setCurrentFilters(currentFilters.concat([leftAnswer?.filter]));
  };
  const SwipeLeftActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => SwipeLeft()}>&nbsp;</SwipeAction>
    </TrailingActions>
  );
  /* funktion for swipe animation */
  const SwipeProgress = (p, d) => {
    if (d == "right") {
      setCurrentStyles({
        opacity: currentStyles.opacity,
        rotation: `rotate(${p / 2}deg)`,
        translate: currentStyles.translate,
      });
    } else if (d == "left") {
      setCurrentStyles({
        opacity: currentStyles.opacity,
        rotation: `rotate(${-(p / 2)}deg)`,
        translate: currentStyles.translate,
      });
    }
  };
  return (
    <SwipeableList
      style={{
        height: "100%",
        maxHeight: "800px",
        width: "100%",
        maxWidth: "600px",
        display: "grid",
        position: "relative",
      }}
      swipeStartThreshold={30}
      threshold={0.25}
    >
      <SwipeableListItem
        leadingActions={SwipeRightActions()}
        trailingActions={SwipeLeftActions()}
        onSwipeProgress={(p, d) => {
          SwipeProgress(p, d);
        }}
        onSwipeEnd={() => {
          setCurrentStyles({
            opacity: currentStyles.opacity,
            rotation: `rotate(${0}deg)`,
            translate: currentStyles.translate,
          });
        }}
      >
        <SwipeCard
          content={Question}
          transferedStyle={currentStyles}
          rightPress={SwipeRight}
          leftPress={SwipeLeft}
          onGoBack={() => {
            if ([...lastQuestion].pop() !== undefined) {
              let lastQuestionCopy = [...lastQuestion];
              let lastQuestionCopyPopped = lastQuestionCopy.pop();
              setLastQuestion(lastQuestionCopy);
              setCurrentQuestion(lastQuestionCopyPopped);

              let currentFiltersCopy = [...currentFilters];
              currentFiltersCopy.pop();
              setCurrentFilters(currentFiltersCopy);
            }
          }}
        ></SwipeCard>
      </SwipeableListItem>
    </SwipeableList>
  );
}
