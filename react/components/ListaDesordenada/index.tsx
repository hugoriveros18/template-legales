import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'listaDesordenada__container',
  'listaDesordenada__internalContainer',
  'listaDesordenada__item',
  'listaDesordenada__paddingPrimer',
  'listaDesordenada__paddingSegundo',
]

export default function ListaDesordenada({configuracionListaDesordenada = {
  nivel: 'Primer Nivel',
  fontSize: '12',
  fontWeight: '400',
  colorTexto: '#706358',
  gapItems: '5',
  tipoMarcador: 'circle',
  margenSuperior: '30',
  margenInferior: '30',
  itemsLista: []
}}:ListaDesordenadaProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.listaDesordenada__container}
      style={{
        paddingTop: `${configuracionListaDesordenada?.margenSuperior}px`,
        paddingBottom: `${configuracionListaDesordenada?.margenInferior}px`
      }}
    >
      <ul
        className={`${handles.listaDesordenada__internalContainer} ${configuracionListaDesordenada?.nivel === 'Primer Nivel' ? handles.listaDesordenada__paddingPrimer : handles.listaDesordenada__paddingSegundo}`}
        style={{
          gap: `${configuracionListaDesordenada?.gapItems}px`,
          listStyleType: configuracionListaDesordenada.tipoMarcador
        }}
      >
        {
          configuracionListaDesordenada?.itemsLista?.map((item, index) => {
            return (
              <li
                key={index}
                className={handles.listaDesordenada__item}
                style={{
                  fontSize: `${configuracionListaDesordenada.fontSize}px`,
                  fontWeight: configuracionListaDesordenada.fontWeight,
                  color: configuracionListaDesordenada.colorTexto
                }}
              >
                {item.texto}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}



