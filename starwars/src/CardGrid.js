import React,{useState,useEffect} from 'react';
import axios from "axios";
import Card from "./Card";
import dummyData from "./dummyData"
import styled from "styled-components"

const StyledGrid = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;

`;

export default function CardGrid(props){
    // const [name,age,height] = props.data;
    // console.log(name,age,height)
    const [characters, setCharacters] = useState([]);
    
    useEffect(()=>{
        axios.get("https://swapi.co/api/people")
        .then(response =>{
          // console.log(response.data.results)
          setCharacters(response.data.results);
        })
        .catch(error=>{
          console.log(`Data was not rendered${error}`)
        })
      },[])

    return(
       <StyledGrid> 
        {characters.map(character => {
            return(
            <Card name={character.name} birth_year={character.birth_year} films={character.films} key={character.name}/>
            )
        })}
      </StyledGrid>
    )
}

