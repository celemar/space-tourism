import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function Layout({ activeLink, setActiveLink }) {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const setDynamicBackgroundImage = () => {
      let imageUrl = "";
      const screenWidth = window.innerWidth;

      switch (location.pathname) {
        case "/":
          imageUrl = selectImageForScreenWidth(
            screenWidth,
            "/assets/home/background-home"
          );
          break;
        case "/Destination":
          imageUrl = selectImageForScreenWidth(
            screenWidth,
            "/assets/destination/background-destination"
          );
          break;
        case "/Crew":
          imageUrl = selectImageForScreenWidth(
            screenWidth,
            "/assets/crew/background-crew"
          );
          break;
        case "/Technology":
          imageUrl = selectImageForScreenWidth(
            screenWidth,
            "/assets/technology/background-technology"
          );
          break;
        default:
          imageUrl = selectImageForScreenWidth(
            screenWidth,
            "/assets/home/background-home"
          );
      }
      setBackgroundImage(imageUrl);
    };

    setDynamicBackgroundImage();

    window.addEventListener("resize", setDynamicBackgroundImage);

    return () => {
      window.removeEventListener("resize", setDynamicBackgroundImage);
    };
  }, [location.pathname]);

  const selectImageForScreenWidth = (width, imageBasePath) => {
    const smallImagePath = `${imageBasePath}-mobile.jpg`;
    const mediumImagePath = `${imageBasePath}-tablet.jpg`;
    const largeImagePath = `${imageBasePath}-desktop.jpg`;

    if (width < 540) {
      return smallImagePath;
    } else if (width < 768) {
      return mediumImagePath;
    } else {
      return largeImagePath;
    }
  };

  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <Outlet />
      {backgroundImage && (
        <style>
          {`
                        body {
                            background-image: url(${backgroundImage});
                            background-size: cover;
                        }
                    `}
        </style>
      )}
    </>
  );
}
