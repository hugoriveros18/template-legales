import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'division__container',
  'division__content',
]

export default function Division({configuracionDivision}:DivisionProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.division__container}
      style={{
        paddingTop: `${configuracionDivision?.margenSuperior}px`,
        paddingBottom: `${configuracionDivision?.margenInferior}px`
      }}
    >
      <div
        className={handles.division__content}
        style={{
          width: `${configuracionDivision?.ancho}%`,
          height: `${configuracionDivision?.alto}px`,
          backgroundColor: `${configuracionDivision?.color}`
        }}
      />
    </div>
  )
}

