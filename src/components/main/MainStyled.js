import styled from "styled-components";
import Lapis from "./img/lapis.png"
import Pontos from "./img/pontos.png"

export const Imperador = styled.figure`

margin-top: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;
height: 10rem;

img{
  width: 21rem;
  height: 10rem;
  border-radius:30px 30px 0px 0px;
}

@media screen and (min-width: 750px) and (max-width: 999px) {

img{
  width: 30rem;
  height: 10rem;
}
}

@media screen and (min-width: 1200px) {

 img{
  width:30rem;
 }


}



`

export const Perfil = styled.figure`
position:relative;


img{
  width: 10rem;
  position:absolute;
  left: 8rem;
  bottom:-04rem;
  border-radius:100px;
  border: 10px white solid
  }

@media screen and (min-width: 750px){

  img{
    left:20rem;
  }
  
}

@media screen and (min-width: 1200px) {

  img{
    left:33rem;
  }
  
}

`

export const Biografia = styled.div`

margin-top: 5rem;
height:5rem;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: space-around;
`

export const Btns = styled.div`
display: flex;
padding: 1rem;
justify-content: center;

`
export const Btnum = styled.button`

width: 14rem;
height: 2rem;
margin-right: 0.3rem;
background-color:#1E70DA;
border:none;
border-radius: 5px;
color: white;
background-image:url(${Lapis});
background-repeat: no-repeat;
background-position-x:2.5rem;
background-position-y: 0.4rem;
background-size: 1.2rem;


`

export const Btndois = styled.button`
width:3rem;
height: 2rem;
border:none;
border-radius: 5px;
background-color: #D2D5D8;
background-image: url(${Pontos});
background-repeat:no-repeat;
background-position:center;
background-size: 1rem;
`
export const Detalhes = styled.div`

margin-top: 1.5rem;
height: 8rem;
justify-content: space-between;
display: flex;
flex-direction: column;


img{
  width: 1.4rem;
}

p{
  margin-left:0.8rem;
}

div{
  display:flex;
  margin-left: 0.5rem;
  color: #828992;
}

@media screen and (min-width:750px) {
  height:15rem;

  img{
  width: 2rem;
}

p{
  margin-left:2rem;
  font-size:2rem;
}

div{
  display:flex;
  margin-left: 5rem;
  color: #828992;
}

  
}
`

export const Btn = styled.div`
width: 90%;
display: block;
margin: auto;
margin-top: 2rem;

button{
 background-color: #CED9E5;
 color: #4386DC;
 border: none;
 display: block;
 margin: auto;
 width: 90%;
 height: 2rem;
}

`