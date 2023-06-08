import React, { useEffect, useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import Titulo from '../Titulo';
import Banner from '../Banner';
import { templateLegalesSchema } from '../../schema/templateLegalesSchema';
import Division from '../Division';
import ListaOrdenada from '../ListaOrdenada';
import ListaDesordenada from '../ListaDesordenada';
import './styles.css';
import Imagen from '../Imagen';
import Subtitulo from '../Subtitulo';

const tiposLayout = {
  titulo: 'Titulo',
  subtitulo: 'Subtitulo',
  banner: 'Banner',
  division: 'Division',
  listaOrdenada: 'Lista Ordenada',
  listaDesordenada: 'Lista Desordenada',
  imagen: 'Imagen'
}

const CSS_HANDLES = [
  'templateLegal__container'
]


export default function TemplateLegales({seccionesTemplate = []}:TemplateLegalesProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [seccionesTemplateActuales, setSeccionesTemplateActuales] = useState<SeccionesTemplate[]>([]);

  //EFFECTS
  useEffect(() => {
    setSeccionesTemplateActuales(seccionesTemplate)
  },[seccionesTemplate])

  //JSX
  return (
    <main className={handles.templateLegal__container}>
      {
        seccionesTemplateActuales.map((seccion, index) => {
          if(seccion.layout.tipoLayout === tiposLayout.titulo) {
            return (
              <Titulo
              key={index}
              configuracionTitulo={seccion.layout.titulo}
              />
            )
          };

          if(seccion.layout.tipoLayout === tiposLayout.subtitulo) {
            return (
              <Subtitulo
              key={index}
              configuracionSubtitulo={seccion.layout.subtitulo}
              />
            )
          };

          if(seccion.layout.tipoLayout === tiposLayout.banner) {
            return (
              <Banner
                key={index}
                configuracionBanner={seccion.layout.banner}
              />
            )
          };

          if(seccion.layout.tipoLayout === tiposLayout.division) {
            return (
              <Division
                key={index}
                configuracionDivision={seccion.layout.division}
              />
            )
          };

          if(seccion.layout.tipoLayout === tiposLayout.listaOrdenada) {
            return (
              <ListaOrdenada
                key={index}
                configuracionListaOrdenada={seccion.layout.listaOrdenada}
              />
            )
          };

          if(seccion.layout.tipoLayout === tiposLayout.listaDesordenada) {
            return (
              <ListaDesordenada
                key={index}
                configuracionListaDesordenada={seccion.layout.listaDesordenada}
              />
            )
          };

          if(seccion.layout.tipoLayout === tiposLayout.imagen) {
            return (
              <Imagen
                key={index}
                configuracionImagen={seccion.layout.imagen}
              />
            )
          }

          return null
        })
      }
    </main>
  )
}

TemplateLegales.schema = templateLegalesSchema;

