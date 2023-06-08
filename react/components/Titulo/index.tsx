import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'titulo__container',
  'titulo__text'
]

export default function Titulo({configuracionTitulo}:TituloProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.titulo__container}
      style={{
        paddingTop: `${configuracionTitulo?.margenSuperior}px`,
        paddingBottom: `${configuracionTitulo?.margenInferior}px`
      }}
    >
      <h3
        className={handles.titulo__text}
        style={{
          color: configuracionTitulo?.color,
          fontSize: `${configuracionTitulo?.fontSize}px`,
          fontWeight: configuracionTitulo?.fontWeight,
          textAlign: configuracionTitulo?.alineacionHorizontal
        }}
      >
        {configuracionTitulo?.texto}
      </h3>
    </div>
  )
}

