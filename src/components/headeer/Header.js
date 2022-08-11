import React from "react";
import * as S from "./HeaderStyled"
import Seta from "./img/seta.png"




export default function Header({nome}) {
  return (
    <S.Headeer>
      <S.Perfil>

    <img src={Seta} alt  />
    <h1>{nome}</h1>

      </S.Perfil>
    </S.Headeer>
  );
}
