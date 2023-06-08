import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import { Link } from "vtex.render-runtime";
import './styles.css';

const CSS_HANDLES = [
  'banner__container',
  'banner__link',
  'banner__content'
]

export default function Banner({configuracionBanner}:BannerProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device } = useDevice()

  //JSX
  return (
    <div
      className={handles.banner__container}
      style={{
        paddingTop: `${configuracionBanner?.margenSuperior}px`,
        paddingBottom: `${configuracionBanner?.margenInferior}px`
      }}
    >
      {
        (configuracionBanner?.slug !== '' && configuracionBanner?.slug !== undefined)
        ?
        <Link
          to={configuracionBanner?.slug}
          className={handles.banner__link}
        >
          <img
            className={handles.banner__content}
            alt="banner"
            src={device === 'phone' ? configuracionBanner?.imagenMobile : configuracionBanner?.imagenDesktop}
          />
        </Link>
        :
        <div
          className={handles.banner__link}
        >
          <img
            className={handles.banner__content}
            alt="banner"
            src={device === 'phone' ? configuracionBanner?.imagenMobile : configuracionBanner?.imagenDesktop}
          />
        </div>
      }
    </div>
  )
}

