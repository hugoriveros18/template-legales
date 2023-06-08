type TiposLayout = 'Titulo' | 'Subtitulo' | 'Banner' | 'Division' | 'Lista Ordenada' | 'Lista Desordenada' | 'Imagen';

type FontWeight = '400' | '600' | '800';

type AlineacionHorizontal = 'start' | 'center' | 'end';

type AlineacionHorizontalImagen = 'flex-start' | 'center' | 'flex-end';

type NivelLista = 'Primer Nivel' | 'Segundo Nivel';

type TipoMarcador = 'circle' | 'disc' | 'disclosure-closed' | 'disclosure-open' | 'square' | 'none';

type ItemLista = {
  _editorItemTitle: string
  texto: string
}

type Titulo = {
  texto: string
  color: string
  fontSize: string
  fontWeight: FontWeight
  alineacionHorizontal: AlineacionHorizontal
  margenSuperior: string
  margenInferior: string
}

type Subtitulo = {
  texto: string
  color: string
  fontSize: string
  fontWeight: FontWeight
  alineacionHorizontal: AlineacionHorizontal
  margenSuperior: string
  margenInferior: string
}

type Banner = {
  imagenDesktop: string
  imagenMobile: string
  slug: string
  margenSuperior: string
  margenInferior: string
}

type Division = {
  ancho: string
  alto: string
  color: string
  margenSuperior: string
  margenInferior: string
}

type ListaOrdenada = {
  nivel: NivelLista
  fontSize: string
  fontWeight: FontWeight
  colorTexto: string
  gapItems: string
  incioLista: number
  margenSuperior: string
  margenInferior: string
  itemsLista: ItemLista[]
}

type ListaDesordenada = {
  nivel: NivelLista
  fontSize: string
  fontWeight: FontWeight
  colorTexto: string
  gapItems: string
  tipoMarcador: TipoMarcador
  margenSuperior: string
  margenInferior: string
  itemsLista: ItemLista[]
}

type Imagen = {
  imagenDesktop: string
  imagenMobile: string
  alineacionHorizontal: AlineacionHorizontalImagen
  slug: string
  margenSuperior: string
  margenInferior: string
}

type Layout = {
  tipoLayout: TiposLayout
  titulo?: Titulo
  subtitulo?: Subtitulo
  banner?: Banner
  division?: Division
  listaOrdenada?: ListaOrdenada
  listaDesordenada?: ListaDesordenada
  imagen?: Imagen
};

type SeccionesTemplate = {
  _editorItemTitle: string
  layout: Layout
};

type TemplateLegalesProps = {
  seccionesTemplate: SeccionesTemplate[]
};

type TituloProps = {
  configuracionTitulo: Titulo | undefined
}

type SubtituloProps = {
  configuracionSubtitulo: Subtitulo | undefined
}

type BannerProps = {
  configuracionBanner: Banner | undefined
}

type DivisionProps = {
  configuracionDivision: Division | undefined
}

type ListaOrdenadaProps = {
  configuracionListaOrdenada: ListaOrdenada | undefined
}

type ListaDesordenadaProps = {
  configuracionListaDesordenada: ListaDesordenada | undefined
}

type ImagenProps = {
  configuracionImagen: Imagen | undefined
}

