"use client";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import SwipeCard from "./SwipeCard";
import { useState } from "react";

/* styling for swipeableList */
const swipeableListStyle = {
  height: "100%",
  width: "100%",
  display: "grid",
  outline: "1px solid red",
};

export default function SwipeList(props) {
  /* states */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentStyles, setCurrentStyles] = useState({
    opacity: 1,
    rotation: `rotate(${0}deg)`,
    translate: 0,
  });
  /* definition af content */
  const quizContent = props.content;
  let Question = quizContent[currentQuestion];
  /* funktion for swipe til højre */
  const SwipeRight = () => {
    setCurrentQuestion(currentQuestion + 1);
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
    }, 500);
    console.log(Question);
  };
  const SwipeRightActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => SwipeRight()}></SwipeAction>
    </LeadingActions>
  );
  /* funktion for swipe til venstre */
  const SwipeLeft = () => {
    setCurrentQuestion(currentQuestion + 1);
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
    }, 500);
    console.log(Question);
  };
  const SwipeLeftActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => SwipeLeft()}></SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList style={swipeableListStyle} threshold={0.25}>
      <SwipeableListItem
        leadingActions={SwipeRightActions()}
        trailingActions={SwipeLeftActions()}
        onSwipeProgress={(p, d) => {
          if (d == "right") {
            setCurrentStyles({
              opacity: currentStyles.opacity,
              rotation:     `rotate(${p}deg)`,
              translate: currentStyles.translate,
            });
          } else if (d == "left") {
            setCurrentStyles({
              opacity: currentStyles.opacity,
              rotation: `rotate(${-p}deg)`,
              translate: currentStyles.translate,
            })
          }
        }}
        onSwipeEnd={() => {
          setCurrentStyles({
            opacity: currentStyles.opacity,
            rotation:`rotate(${0}deg)`,
            translate: currentStyles.translate,
          })
        }}
      >
        <SwipeCard
          content={Question}
          transferedStyle={currentStyles}
        ></SwipeCard>
      </SwipeableListItem>
    </SwipeableList>
  );
}
