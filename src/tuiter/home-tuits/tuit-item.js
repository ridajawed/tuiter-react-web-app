import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit, likeTuit, unlikeTuit} from "../reducers/tuits-reducer";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {BiMessageRounded} from "react-icons/bi";
import {AiFillHeart, AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import {TiDeleteOutline} from "react-icons/ti";
import * as PropTypes from "prop-types";
import {VscVerifiedFilled} from "react-icons/vsc";


function LinkedinSquare(props) {
    return null;
}

LinkedinSquare.propTypes = {
    color: PropTypes.string,
    style: PropTypes.shape({fontSize: PropTypes.string})
};
const TuitItem = (
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
            verified: false
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const likeTuitHandler = (id) => {
        dispatch(likeTuit(id));
    }

    const unlikeTuitHandler = (id) => {
        dispatch(unlikeTuit(id));
    }

    let likedButton;
    if (tuit.liked) {
        likedButton = <AiFillHeart color="#fb3958" onClick={() => unlikeTuitHandler(tuit._id)}/>;
    } else {
        likedButton = <AiOutlineHeart onClick={() => likeTuitHandler(tuit._id)} />;
    }
    let verifiedIcon;
    if (tuit.verified) {
        verifiedIcon = <VscVerifiedFilled color="#1DA1F2" />;
    }
    return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <img width={48} height={48} className="rounded-circle" src={`${tuit.profileImage}`}/>
                    </div>
                    <div className="col-11">
                        <TiDeleteOutline className="float-end" onClick={() => deleteTuitHandler(tuit._id)}></TiDeleteOutline>
                        <div> <b>{tuit.userName}</b> {verifiedIcon} {tuit.handle} . {tuit.time}</div>
                        <div>{tuit.content}</div>
                        <br/>
                        <div className="row">
                            <div className="col-3">
                                <BiMessageRounded className="wd-padded-0"></BiMessageRounded>
                                {tuit.replies}
                            </div>
                            <div className="col-3">
                                <AiOutlineRetweet className="wd-padded-0"></AiOutlineRetweet>
                                {tuit.retuits}
                            </div>
                            <div className="col-3">
                                {likedButton}
                                {tuit.likes}
                            </div>
                            <div className="col-3">
                                <BsUpload className="wd-padded-0"></BsUpload>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
    );
};
export default TuitItem;