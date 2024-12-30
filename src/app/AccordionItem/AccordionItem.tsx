'use client'
import React, { FC, ReactNode, useState } from "react";
import "./AccordionItem.css";
import Image from "next/image";

interface AccordionItemData {
  question: string;
  answerHeading: string;
  answer: string;
  id: number; // Use 'string' if IDs are strings
}

// Define the props for the AccordionItem component
interface AccordionItemProps {
  item: AccordionItemData;
  setOpenQuestion: (id: number) => void;
  openQuestion: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  setOpenQuestion,
  openQuestion,
}) => {
  const { question, answerHeading, answer, id } = item;

  const isOpen = openQuestion === id;

  const handleQuestionClick = (id: number) => {
    setOpenQuestion(isOpen ? -1 : id);
  };

  return (
    <div className="accordion-item">
      <button
        className="accordion-item__bar"
        onClick={() => handleQuestionClick(id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
      >

        <p className="text-med accordion-item__question">{question}</p>
        <Image
          className="accordion-icon accordion-item__icon"
          src="/colored-arrow.svg" 
          alt={isOpen ? "Collapse" : "Expand"}
          width={24} 
          height={24} 
        />
      </button>
      <div
        className={`accordion-item__answer ${isOpen ? "visible" : ""}`}
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
      >
        <div className="accordion-item__heading-container">
          <p className="text-med accordion-item__answer-heading">
            {answerHeading}
          </p>
          <img
            className="accordion-icon accordion-item__answer-icon"
            src="/colored-arrow-right.svg"
            alt="Arrow Right"
          />
        </div>
        <p className="text-reg accordion-item__answer-description">{answer}</p>
      </div>

    </div>
  );
};

export default AccordionItem;
