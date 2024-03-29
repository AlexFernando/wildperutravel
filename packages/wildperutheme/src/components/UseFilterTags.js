import React,{useState, useEffect, useRef} from 'react';
import {styled, connect, Global, css} from "frontity";

const useFilterTags = () => {
    const [allCategory, saveCategory] = useState('');

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function fetchMyAPI() {
            let response = await fetch('https://wildperu2023.wildfreewalkingtours.com/wp-json/wp/v2/tags');

            response = await response.json();

            setCategories(response);
        }
        fetchMyAPI()
    }, []);    

    const FilterSubcategoriesUI = () => (

        categories.map(elem => {
            
            if(elem.name !== "hometours"){
                return <ButtonStyle type="button" onClick = {() => saveCategory(elem.id)}>{elem.name}</ButtonStyle>
            }
        })
    )

    return {
        allCategory,
        FilterSubcategoriesUI
    }
}


const ButtonStyle = styled.button`

    /* CSS */
  
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform,opacity;
    z-index: 0;

    //styled added by me
    text-transform: capitalize;
    margin: .5rem;

    &:hover {
        background: #F6F9FE;
        color: #174ea6;
    }

    &:active {
        box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
        outline: none;
    }

    &:focus {
        outline: none;
        border: 2px solid #4285f4;
    }

    &:not(:disabled) {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    &:not(:disabled):hover {
        box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
    }

    &:not(:disabled):focus {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    &:not(:disabled):active {
        box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
    }

    &:disabled {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
`

export default useFilterTags;