export const templateLegalesSchema = {
  title: 'Plantilla Legales',
  description: 'Organizacion general de plantilla legales',
  type: 'object',
  properties: {
    seccionesTemplate: {
      title: 'Secciones de Plantilla',
      type: 'array',
      items: {
        properties: {
          __editorItemTitle: {
            title: "Nombre Del Bloque",
            type: "string",
            default: ''
          },
          layout: {
            title: 'Tipo de Layout',
            type: 'object',
            properties: {
              tipoLayout: {
                title: 'Tipo de Layout',
                type: 'string',
                enum: [
                  'Titulo',
                  'Subtitulo',
                  'Banner',
                  'Division',
                  'Lista Ordenada',
                  'Lista Desordenada',
                  'Imagen'
                ],
                default: 'Titulo'
              }
            },
            dependencies: {
              tipoLayout: {
                oneOf: [

                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Titulo'
                        ]
                      },
                      titulo: {
                        title: 'Titulo',
                        type: 'object',
                        properties: {
                          texto: {
                            title: 'Texto Titulo',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "textarea"
                            }
                          },
                          color: {
                            title: 'Color',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "color"
                            }
                          },
                          fontSize: {
                            title: 'Tamaño de Fuente',
                            description: 'Tamaño en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          fontWeight: {
                            title: 'Ancho de Fuente',
                            type: 'string',
                            default: '400',
                            enum: [
                              '400',
                              '600',
                              '800'
                            ]
                          },
                          alineacionHorizontal: {
                            title: 'Alineación Horizontal',
                            type: 'string',
                            default: 'center',
                            enum: [
                              'start',
                              'center',
                              'end'
                            ]
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  },
                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Subtitulo'
                        ]
                      },
                      subtitulo: {
                        title: 'Subtitulo',
                        type: 'object',
                        properties: {
                          texto: {
                            title: 'Texto Subtitulo',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "textarea"
                            }
                          },
                          color: {
                            title: 'Color',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "color"
                            }
                          },
                          fontSize: {
                            title: 'Tamaño de Fuente',
                            description: 'Tamaño en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          fontWeight: {
                            title: 'Ancho de Fuente',
                            type: 'string',
                            default: '400',
                            enum: [
                              '400',
                              '600',
                              '800'
                            ]
                          },
                          alineacionHorizontal: {
                            title: 'Alineación Horizontal',
                            type: 'string',
                            default: 'center',
                            enum: [
                              'start',
                              'center',
                              'end'
                            ]
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  },
                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Banner'
                        ]
                      },
                      banner: {
                        title: 'Banner',
                        type: 'object',
                        properties: {
                          imagenDesktop: {
                            title: 'Imagen Desktop - Tablet',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "image-uploader"
                            }
                          },
                          imagenMobile: {
                            title: 'Imagen Mobile',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "image-uploader"
                            }
                          },
                          slug: {
                            title: 'Slug',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "textarea"
                            }
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  },
                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Division'
                        ]
                      },
                      division: {
                        title: 'Division',
                        type: 'object',
                        properties: {
                          ancho: {
                            title: 'Ancho',
                            description: 'ancho en %, ex. 50',
                            type: 'string',
                            default: ''
                          },
                          alto: {
                            title: 'Alto',
                            description: 'alto en px, ex. 3',
                            type: 'string',
                            default: ''
                          },
                          color: {
                            title: 'Color',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "color"
                            }
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  },
                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Lista Ordenada'
                        ]
                      },
                      listaOrdenada: {
                        title: 'Lista Ordenada',
                        type: 'object',
                        properties: {
                          itemsLista: {
                            title: 'Items de la Lista',
                            type: 'array',
                            items: {
                              properties: {
                                __editorItemTitle: {
                                  title: "Texto Identificador",
                                  type: "string",
                                  default: '',
                                  widget: {
                                    "ui:widget": "textarea"
                                  }
                                },
                                texto: {
                                  title: "Texto Elemento",
                                  type: "string",
                                  default: '',
                                  widget: {
                                    "ui:widget": "textarea"
                                  }
                                },
                              }
                            }
                          },
                          nivel: {
                            title: 'Nivel Lista',
                            type: 'string',
                            default: 'Primer Nivel',
                            enum: [
                              'Primer Nivel',
                              'Segundo Nivel'
                            ]
                          },
                          fontSize: {
                            title: 'Tamaño de Fuente',
                            description: 'Tamaño en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          fontWeight: {
                            title: 'Ancho de Fuente',
                            type: 'string',
                            default: '400',
                            enum: [
                              '400',
                              '600',
                              '800'
                            ]
                          },
                          colorTexto: {
                            title: 'Color Texto',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "color"
                            }
                          },
                          gapItems: {
                            title: 'Gap Entre Elementos',
                            description: 'Gap en px, ex. 8',
                            type: 'string',
                            default: ''
                          },
                          incioLista: {
                            title: 'Primer Numero de Lista',
                            type: 'number',
                            description: 'Numero con el que empieza la lista, ex. 1',
                            default: 1
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  },
                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Lista Desordenada'
                        ]
                      },
                      listaDesordenada: {
                        title: 'Lista Desordenada',
                        type: 'object',
                        properties: {
                          itemsLista: {
                            title: 'Items de la Lista',
                            type: 'array',
                            items: {
                              properties: {
                                __editorItemTitle: {
                                  title: "Texto Identificador",
                                  type: "string",
                                  default: '',
                                  widget: {
                                    "ui:widget": "textarea"
                                  }
                                },
                                texto: {
                                  title: "Texto Elemento",
                                  type: "string",
                                  default: '',
                                  widget: {
                                    "ui:widget": "textarea"
                                  }
                                },
                              }
                            }
                          },
                          nivel: {
                            title: 'Nivel Lista',
                            type: 'string',
                            default: 'Primer Nivel',
                            enum: [
                              'Primer Nivel',
                              'Segundo Nivel'
                            ]
                          },
                          fontSize: {
                            title: 'Tamaño de Fuente',
                            description: 'Tamaño en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          fontWeight: {
                            title: 'Ancho de Fuente',
                            type: 'string',
                            default: '400',
                            enum: [
                              '400',
                              '600',
                              '800'
                            ]
                          },
                          colorTexto: {
                            title: 'Color Texto',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "color"
                            }
                          },
                          gapItems: {
                            title: 'Gap Entre Elementos',
                            description: 'Gap en px, ex. 8',
                            type: 'string',
                            default: ''
                          },
                          tipoMarcador: {
                            title: 'Tipo de Marcador',
                            type: 'string',
                            default: 'circle',
                            enum: [
                              'circle',
                              'disc',
                              'disclosure-closed',
                              'disclosure-open',
                              'square',
                              'none'
                            ]
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  },
                  {
                    properties: {
                      tipoLayout: {
                        enum: [
                          'Imagen'
                        ]
                      },
                      imagen: {
                        title: 'Imagen',
                        type: 'object',
                        properties: {
                          imagenDesktop: {
                            title: 'Imagen Desktop - Tablet',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "image-uploader"
                            }
                          },
                          imagenMobile: {
                            title: 'Imagen Mobile',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "image-uploader"
                            }
                          },
                          alineacionHorizontal: {
                            title: 'Alineacion Horizontal',
                            type: 'string',
                            default: 'center',
                            enum: [
                              'flex-start',
                              'center',
                              'flex-end'
                            ]
                          },
                          slug: {
                            title: 'Slug',
                            type: 'string',
                            default: '',
                            widget: {
                              "ui:widget": "textarea"
                            }
                          },
                          margenSuperior: {
                            title: 'Margen Superior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          },
                          margenInferior: {
                            title: 'Margen Inferior',
                            description: 'margen en px, ex. 16',
                            type: 'string',
                            default: ''
                          }
                        }
                      }
                    }
                  }

                ]
              }
            }
          }
        }
      }
    }
  }
}

