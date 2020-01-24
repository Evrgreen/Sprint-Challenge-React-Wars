import React, {useState} from "react";
import styled from "styled-components";


const StyledCard = styled.div`
    background-color: #ede9e8;
    border-radius:5px;
    border:3px solid #33b5e5;
    color:#476c82;
    height:275px;
    margin: 0 2rem 4rem 0;
    width:250px;
    & ul{
        text-align:left;

    }
    `;

export default function Card({name,birth_year,films}){
    

    const filmList = {1:"A New Hope", 2: "The Empire Strikes Back", 3:"Return of the Jedi", 4:"The Phantom Menace",5:"Attack of the Clones",6:"Revenge of the Sith", 7:"The Force Awakens"};
    return(
        <StyledCard className="card">
            <h2>{name}</h2>
            <h3>Year of Birth: {birth_year}</h3>
            <p>Appeared in {films.length} Films</p>
            <ul>
                {films.map(film => {
                    return(
                    <li>{filmList[film.charAt(film.length-2)]}</li>
                    )
                })}
            </ul>
        </StyledCard>
    )
}