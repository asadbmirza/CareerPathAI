import styled from "styled-components"


const HeaderText = styled.h1 `
 color: white;
 text-align: center;
 font-size: clamp(1rem, 1.5rem + 1vw, 4rem);
`


const SuggestionCardStyle = styled.div`
 display: flex;
 justify-content: space-between;
 background-color: white;
 padding: 20px;
 border-radius: 10px;
 margin: 20px 0px;
 height: 300px;
 gap: 15px;
 transition: 200ms;


 &:hover {
   scale: 1.02;
 }
`


const ImgCaption = styled.div `
 flex: 1.5;
 background-color: white;
 border-radius: 15px;
 width: 350px;
 height: auto;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 text-align: center;
 font-family: Arial, sans-serif;
 padding: 0;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
 overflow: hidden;


 img {
   width: 100%;
   height: 240px;
   object-fit: cover;
   object-position: top;
 }
`


const CardTextStyle = styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: space-between;


 h2 {
   font-size: clamp(1.25rem, 1.25rem + 0.75vw, 1.75rem);
 }
 p {
   color: #808080;
   font-weight: bold;
   font-size: clamp(0.75rem, 0.75rem + 0.75vw, 1.25rem);
 }
 ul {
   display: flex;
   list-style-type: none;
   gap: 8px;
   align-items: center;
   flex-wrap: wrap;
 }
 ul span {
   font-size: clamp(0.75rem, 0.75rem + 0.75vw, 1.25rem);
 }
 li {
   background-color: #2c2c2c;
   font-size: 0.75rem;
   color: white;
   padding: 5px 8px;
   border-radius: 5px;
 }


`


export { HeaderText, SuggestionCardStyle, ImgCaption, CardTextStyle }