import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'listaOrdenada__container',
  'listaOrdenada__internalContainer',
  'listaOrdenada__item',
  'listaOrdenada__paddingPrimer',
  'listaOrdenada__paddingSegundo',
]

export default function ListaOrdenada({configuracionListaOrdenada = {
  nivel: 'Primer Nivel',
  colorTexto: '#706358',
  fontSize: '12',
  fontWeight: '400',
  gapItems: '5',
  incioLista: 1,
  margenSuperior: '30',
  margenInferior: '30',
  itemsLista: []
}}:ListaOrdenadaProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.listaOrdenada__container}
      style={{
        paddingTop: `${configuracionListaOrdenada?.margenSuperior}px`,
        paddingBottom: `${configuracionListaOrdenada?.margenInferior}px`
      }}
    >
      <ol
        className={`${handles.listaOrdenada__internalContainer} ${configuracionListaOrdenada?.nivel === 'Primer Nivel' ? handles.listaOrdenada__paddingPrimer : handles.listaOrdenada__paddingSegundo}`}
        start={configuracionListaOrdenada?.incioLista}
        style={{
          gap: `${configuracionListaOrdenada?.gapItems}px`
        }}
      >
        {
          configuracionListaOrdenada?.itemsLista?.map((item, index) => {
            return (
              <li
                key={index}
                className={handles.listaOrdenada__item}
                style={{
                  fontSize: `${configuracionListaOrdenada.fontSize}px`,
                  fontWeight: configuracionListaOrdenada.fontWeight,
                  color: configuracionListaOrdenada.colorTexto
                }}
              >
                {item.texto}
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

