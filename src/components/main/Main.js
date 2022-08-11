import React from "react";
import Adriano from "./img/Adriano.jpg";
import Eu from "./img/eu.jpg";
import Capelo from "./img/capelo.png";
import Casa from "./img/casa.png";
import Pontosmenu from "./img/pontosmenu.png";
import Maps from "./img/maps.png";
import * as S from "./MainStyled"

export default function Main
({nome, idade}) {
  return (
    <>   
      <S.Imperador>
        <img src={Adriano}/>
      </S.Imperador>

      <S.Perfil>
       <img src={Eu}/>
      </S.Perfil>

      <S.Biografia>
      <h2>{nome}</h2>
      <p>{idade}</p>
      </S.Biografia>

      <S.Btns>
        <S.Btnum>Editar Perfil</S.Btnum>
        <S.Btndois></S.Btndois>
      </S.Btns>

      <S.Detalhes>
        <div>
          <img src={Capelo} alt="capelo"/>
          <p>Estudando Programação em VaiNaWeb</p>
        </div>

        <div>
          <img src={Casa} alt="casa"/>
          <p>Mora em São Gonçalo</p>
        </div>

        <div>
          <img src={Maps} alt="maps"/>
          <p>De São Gonçalo</p>
        </div>

        <div>
          <img src={Pontosmenu}/>
          <p> Ver suas informações de seção Sobre</p>
        </div>
      </S.Detalhes>

      <S.Btn>
      <button>Editar detalhes públicos</button>
      </S.Btn>


    </>
  );
}
