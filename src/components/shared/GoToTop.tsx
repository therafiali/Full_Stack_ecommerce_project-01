"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UP from "./icons/UP";
import {usePathname} from 'next/navigation'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const pathname=usePathname()

  useEffect(() => {
    function handleScroll() {
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      setIsScroll(scrollValue);
    }

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {

      
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  // setIsVisible(false)

  return (
    <Wrapper>
      
      {isVisible && (
        <div
          className={`top-btn border-2  ${
            isScroll >= 20 ? "border-t-black" : ""
          }  ${isScroll >= 40 ? "border-r-black" : ""}  ${
            isScroll >= 60 ? "border-b-black" : ""
          }  ${isScroll >= 80 ? "border-l-black" : ""}	`}
          onClick={goToBtn}
        >
          <div className="top-btn--icon text-black">
            <UP />
            {/* {isScroll} */}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    
    font-size: 2.4rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: #f1f1f1;
    box-shadow: ;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -border-minus: calc(var(--border-w, 1px) * 2);

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.1rem);
      }
      100% {
        transform: translateY(0.3rem);
      }
    }
  }
  body {
    background: #121212;
  }
  
  $spinner-width: 8px;
  $spinner-color: #7D5195;
  

  .spinner {
    border-width: 8px;
    border-style: solid;
    border-color: #7D5195 #7D5195 #7D5195 transparent;
    width: 100px;
    height: 0px;
    border-radius: 50%;
    animation: spin 1.5s infinite;
    position: relative;
    
    margin: 6em auto;
    
    &:before, &:after {
      content="";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $spinner-color;
      position: absolute;
      left: 8px;
    }
    
    &:before {
      top: 8px;
    }
    
    &:after {
      bottom: 8px;
    }
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

`;

export default GoToTop;
