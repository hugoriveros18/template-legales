import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'subtitulo__container',
  'subtitulo__text'
]

export default function Subtitulo({configuracionSubtitulo}:SubtituloProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.subtitulo__container}
      style={{
        paddingTop: `${configuracionSubtitulo?.margenSuperior}px`,
        paddingBottom: `${configuracionSubtitulo?.margenInferior}px`
      }}
    >
      <h4
        className={handles.subtitulo__text}
        style={{
          color: configuracionSubtitulo?.color,
          fontSize: `${configuracionSubtitulo?.fontSize}px`,
          fontWeight: configuracionSubtitulo?.fontWeight,
          textAlign: configuracionSubtitulo?.alineacionHorizontal
        }}
      >
        {configuracionSubtitulo?.texto}
      </h4>
    </div>
  )
}

