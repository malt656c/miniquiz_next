"use client";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import SwipeCard from "./SwipeCard";
import { useState } from "react";
import Image from "next/image";
import QuizEndpage from "../QuizEndpage";
import ProductList from "../ProductList";
/* styling for swipeableList */
let swipeableListStyle = {
  height: "100%",
  maxHeight: "900px",
  width: "100%",
  maxWidth: "600px",
  display: "grid",
  outline: "1px solid red",
};
let EndPage;
export default function SwipeList(props) {
  /* states */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentStyles, setCurrentStyles] = useState({
    opacity: 1,
    rotation: `rotate(${0}deg)`,
    translate: 0,
  });
  const [currentFilters, setCurrentFilters] = useState([]);
  const [content, setContent] = useState("quiz");
  /* definition af content */
  const quizContent = props.content;
  let Question = quizContent[currentQuestion];
  let rightAnswer = Question?.svarListe[1];
  let leftAnswer = Question.svarListe[0];
  let products = props.products.filter((i) => !currentFilters.flat().includes(i.categories[3] || i.categories[4]));
  /* funktion for når quizzen er slut */

  const OnEnd = () => {
setContent("endScreen")
  };
  /* funktion for swipe til højre */
  const SwipeRight = () => {
    if (leftAnswer.nextQuestion == "end") {
      OnEnd();
    } else setCurrentQuestion(rightAnswer.nextQuestion);
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
      OnEnd();
    } else setCurrentQuestion(leftAnswer.nextQuestion);
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
        rotation: `rotate(${p}deg)`,
        translate: currentStyles.translate,
      });
    } else if (d == "left") {
      setCurrentStyles({
        opacity: currentStyles.opacity,
        rotation: `rotate(${-p}deg)`,
        translate: currentStyles.translate,
      });
    }
  };
/* TODO add if/else statements ans usestate to switch between content */
if(content == "quiz"){
  return (
      <SwipeableList style={swipeableListStyle} swipeStartThreshold={5} threshold={0.25}>
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
          <SwipeCard content={Question} transferedStyle={currentStyles} rightAnswer={rightAnswer?.svar} leftAnswer={leftAnswer?.svar}></SwipeCard>
        </SwipeableListItem>
      </SwipeableList>
  );
} else if(content=="endScreen"){
  return(
    <QuizEndpage getproducts={()=>{setContent("productsScreen")}}></QuizEndpage>
  )
}else if(content=="productsScreen"){
  return(
    <ProductList content={products}></ProductList>
  )
}
  
}
