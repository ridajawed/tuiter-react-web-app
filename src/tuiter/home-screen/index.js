import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
import TuitList from "../home-tuits";
import WhatsHappening from "../whats-happening";
function ExploreScreen() {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default ExploreScreen;