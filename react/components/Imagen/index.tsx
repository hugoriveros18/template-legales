import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import { Link } from "vtex.render-runtime";
import './styles.css';

const CSS_HANDLES = [
  'imagen__container',
  'imagen__link',
  'imagen__linkUnset',
  'imagen__content'
]

export default function Imagen({configuracionImagen}:ImagenProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device } = useDevice();

  //JSX
  return (
    <div
      className={handles.imagen__container}
      style={{
        paddingTop: `${configuracionImagen?.margenSuperior}px`,
        paddingBottom: `${configuracionImagen?.margenInferior}px`,
        justifyContent: configuracionImagen?.alineacionHorizontal
      }}
    >
      {
        (configuracionImagen?.slug !== '' && configuracionImagen?.slug !== undefined)
        ?
        <Link
          to={configuracionImagen?.slug}
          className={handles.imagen__link}
        >
          <img
            className={handles.imagen__content}
            alt="imagen"
            src={device === 'phone' ? configuracionImagen?.imagenMobile : configuracionImagen?.imagenDesktop}
          />
        </Link>
        :
        <div
          className={handles.imagen__linkUnset}
        >
          <img
            className={handles.imagen__content}
            alt="imagen"
            src={device === 'phone' ? configuracionImagen?.imagenMobile : configuracionImagen?.imagenDesktop}
          />
        </div>
      }
    </div>
  )
}

