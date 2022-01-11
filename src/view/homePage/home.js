import React, { useState, useEffect } from "react";
import Card from "../common/card/card";
import { sliceString } from "./string";
import moment from "moment";
import Navbar from "../common/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./home.css";
import axios from 'axios';
import ky from 'ky';

function Home() {
  const username = localStorage.getItem("userName");
  const navigate = useNavigate();

  let num = 0;
  const [movieData, setmovieData] = useState();
  console.log(movieData, "check movie details");

  useEffect(() => {
    ky.post('https://hoblist.com/api/movieList', {json: 
    { category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting",
  }}).json().then(response => setmovieData(response?.result)).catch(error => toast.error(error))
  }, [num]);


  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Navbar />

      <div className="my-5 row" style={{ width: "90%", margin: "auto" }}>
        <h3 className="userGreeting my-4">
          Hey{" "}
          <span className="usernameStyling">
            {username ? username : "Anonymous"}
          </span>
          !! what are you going to watch today ??{" "}
        </h3>
        {movieData
          ? movieData?.map((item) => {
              return (
                <Card
                  movieName={sliceString(item?.title, 12)}
                  movieGenre={sliceString(item?.genre, 17)}
                  movieDirector={sliceString(item?.director?.[0], 14)}
                  movieStar={sliceString(item?.stars?.[0], 14)}
                  movieImg={item?.poster}
                  movieLanguage={item?.language}
                  movieReleased={moment(item?.releasedDate).format("DD MMM")}
                  movieTime={item?.runTime}
                  movieViews={item?.pageViews}
                  movieVoted={item?.totalVoted}
                  movieDymVote={item?.totalVoted}
                />
              );
            })
          : "Loading ..."}
      </div>
    </div>
  );
}

export default Home;
