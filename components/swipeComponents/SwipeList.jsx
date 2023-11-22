"use client";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import SwipeCard from "./SwipeCard";
import { useState } from "react";
import Image from "next/image";
/* styling for swipeableList */
let swipeableListStyle = {
  height: "100%",
  maxHeight: "900px",
  width: "100%",
  maxWidth: "600px",
  display: "grid",
  outline: "1px solid red",
};  let productList;
export default function SwipeList(props) {
  /* states */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentStyles, setCurrentStyles] = useState({
    opacity: 1,
    rotation: `rotate(${0}deg)`,
    translate: 0,
  });
  const [currentFilters, setCurrentFilters] = useState([]);
  /* definition af content */
  const quizContent = props.content;
  let Question = quizContent[currentQuestion];
  let rightAnswer = Question?.svarListe[1];
  let leftAnswer = Question.svarListe[0];
  let products = props.products.filter((i) => !currentFilters.flat().includes(i.categories[3] || i.categories[4]));
  /* funktion for når quizzen er slut */

  const OnEnd = () => {
    swipeableListStyle = { display: "none" };

    productList = (
      <ul className="flex flex-wrap gap-4 p-4 justify-center max-w-[1500px]">
        {products?.map((i) => {
          return (
            <li key={i?.id} className="outline outline-1 p-4 flex-grow max-w-[150px]">
              <div className=" grid gap-4 place-items-center">
                <Image src={i.image} width={100} height={100} alt={i.name}></Image>
                <span className="font-bold">{i.name}</span>
                <span>{i.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
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
  return (
    <>
      {productList}
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
    </>
  );
}
