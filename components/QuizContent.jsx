"use client";
import SwipeList from "./SwipeList";
import { useState } from "react";
import QuizFrontpage from "./QuizFrontpage";
import QuizEndpage from "./QuizEndpage";
import ProductList from "./ProductList";

export default function QuizContent(props) {
  /* states */
  const [currentFilters, setCurrentFilters] = useState([]);
  const [content, setContent] = useState("startScreen");
  /* content */
  if (content == "startScreen") {
    return (
      <QuizFrontpage
        onStart={() => {
          setContent("quiz");
        }}
      />
    );
  } else if (content == "quiz") {
    return (
      <SwipeList
        content={props.content}
        OnEnd={(filters) => {
          setCurrentFilters(filters);
          setContent("endScreen");
        }}
      />
    );
  } else if (content == "endScreen") {
    return (
      <QuizEndpage
        getproducts={() => {
          setContent("productsScreen");
        }}
      />
    );
  } else if (content == "productsScreen") {
    return <ProductList content={props.products} filters={currentFilters} />;
  }
}
