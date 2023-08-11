import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineDislike, AiFillDislike, AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import {updateTuitThunk} from "../services/tuits-thunks";


const TuitStats = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
            "image": "tesla.png",
            "retuits": "234",
            "likes": "2346",
            "replies": "652",
            "profileImage": "https://bossierpress.com/wp-content/uploads/2021/03/unnamed.jpg",
            verified: false,
            liked: true
        }
    }
) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (id) => {
        dispatch(updateTuitThunk({ ...tuit, liked: true, likes: tuit.likes + 1 }))
    }

    const unlikeTuitHandler = (id) => {
        dispatch(updateTuitThunk({ ...tuit, liked: false, likes: tuit.likes - 1 }))
    }

    const dislikeTuitHandler = (id) => {
        dispatch(updateTuitThunk({ ...tuit, disliked: true, dislikes: tuit.dislikes + 1 }))
    }

    const undodislikeTuitHandler = (id) => {
        dispatch(updateTuitThunk({ ...tuit, disliked: false, dislikes: tuit.dislikes - 1 }))
    }

    let likedButton;
    if (tuit.liked) {
        likedButton = <AiFillHeart color="#fb3958" onClick={() => unlikeTuitHandler(tuit._id)} />;
    } else {
        likedButton = <AiOutlineHeart onClick={() => likeTuitHandler(tuit._id)} />;
    }

    let dislikedButton;
    if (tuit.disliked) {
        dislikedButton = <AiFillDislike color="#1DA1F2" onClick={() => undodislikeTuitHandler(tuit._id)} />;
    } else {
        dislikedButton = <AiOutlineDislike onClick={() => dislikeTuitHandler(tuit._id)} />;
    }

    return (
        <div className="row">
        <div className="col-2">
            <BiMessageRounded className="wd-padded-0"></BiMessageRounded>
            {tuit.replies}
        </div>
        <div className="col-2">
            <AiOutlineRetweet className="wd-padded-0"></AiOutlineRetweet>
            {tuit.retuits}
        </div>
        <div className="col-2">
            {likedButton}
            {tuit.likes}
        </div>
        <div className="col-2">
            {dislikedButton}
            {tuit.dislikes}
        </div>
        <div className="col-2">
            <BsUpload className="wd-padded-0"></BsUpload>
        </div>
    </div>
    );
};


export default TuitStats;