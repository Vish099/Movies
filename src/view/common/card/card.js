import React from 'react'
import { GoTriangleUp,GoTriangleDown } from "react-icons/go";
import "./card.css"

function Card(props) {

const{
movieName = "",
movieGenre = "",
movieDirector = "",
movieStar = "",
movieImg = "",
movieLanguage = "",
movieReleased = "",
movieTime = "",
movieViews = "",
movieVoted = "",
movieDymVote = ""
} = props





    return (
        <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
        <div className="card-body">
                        <div className='head-card-body'>
                        <div className="vote">
                            <GoTriangleUp className='vote-cta'></GoTriangleUp>
                            <p className='vote-num'>{movieDymVote}</p>
                            <GoTriangleDown className='vote-cta'></GoTriangleDown>
                        </div>
                        <div className="movie-img">
                             <img src={movieImg} alt="movie" className='movie-img'/>
                        </div>
                        <div className='details'>
                        <h6 className='movie-name'>{movieName}</h6>
                        <h6 className='value mt-3 pt-1'><span className='key'>Genre:</span>{movieGenre} </h6>
                        <h6 className='value pt-1'><span className='key'>Director:</span>{movieDirector} </h6>
                        <h6 className='value pt-1'><span className='key'>Starring:</span>{movieStar} </h6>
                        <h6 className='movie-length pt-1'>{movieTime ? movieTime : "-"} Mins| {movieLanguage} | {movieReleased} </h6>
                        <h6 className='movie-votes pt-1'>{movieViews} views | voted by {movieVoted} people</h6>
                        </div>
                        </div>
                        <div className='footer-card-body'>
                           <button className='btn btn-info watch-trailer'>Watch Trailer</button>
                        </div>
                       
                    </div>
        </div>
    )
}

export default Card
