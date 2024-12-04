---
layout: compose
title: Plantilla para publicación de datos
description: Plantilla para publicación de datos
background: https://upload.wikimedia.org/wikipedia/commons/1/1b/Carao_en_Uruguay.jpg
lang-ref: data-publishing
lang: es
toc: true
imageLicense: |
  Vía Pxfuel
height: 41vh
composition: 
  - type: heroImage
  - type: blank
  - type: pageMarkdown
---

# Plantillas para publicación de datos

Las plantillas para publicación de registros biológicos son archivos en formato Excel que tienen disponibles los campos (encabezados) del estándar [Darwin Core](https://dwc.tdwg.org/terms/){:target="_blank"} y se acompaña además con una definición para cada uno, indicando los campos obligatorios, recomendados y opcionales para poder publicar datos de biodiversidad en el portal de SIBUy. Estas plantillas fueron generadas por el [SIB Colombia](https://biodiversidad.co/recursos/plantillas-dwc/){:target="_blank"} (Plata C, Ortiz R, Marentes E, Velásquez J, Diaz J, Escobar D, Castro C, Leuro N, Sánchez L. 2024. Plantilla para la publicación de registros biológicos. Sistema de Información sobre Biodiversidad de Colombia. versión 4.1, Bogotá, D.C.) y adaptadas para Uruguay (2024).

## Registros biológicos
Son recursos que evidencian la presencia de una especie en un lugar específico y, generalmente, en una fecha determinada. Estos conjuntos de datos complementan la información de las listas de especies, ya que permiten mapear la distribución histórica o actual de las especies. En su forma más básica, estos datos pueden incluir únicamente información general sobre la ubicación, como el país, pero lo ideal es que también incorporen coordenadas geográficas y su precisión, facilitando un mapeo detallado. En muchos casos, los registros pueden documentar múltiples individuos de la misma especie por separado. Ejemplos de este tipo de datos incluyen bases de datos de especímenes de colecciones de historia natural, observaciones generadas por ciencia ciudadana, datos provenientes de proyectos de atlas de especies, entre otros.

_Campos DwC obligatorios_
- occurrenceID
- basisOfRecord
- scientificName
- eventDate

_Campos DwC recomendados_
- taxonRank - para justificar el nombre científico (scientificName)
- kingdom - y otra taxonomía superior si es posible
- decimalLatitude & decimalLongitude & geodeticDatum - para proporcionar un punto específico de ubicación
- countryCode
- individualCount / organismQuantity & organismQuantityType - para registrar la cantidad de registros biológicos de una especie

[Descargá la plantilla](https://drive.google.com/uc?export=download&id=1XsHT0NCxlw0vn3aqLZWrRcN2mp9Z5cxq){: .button .is-primary target="_blank"}

<br>


## Eventos de muestreo
Este tipo de datos ofrece información detallada sobre la presencia de especies en lugares y momentos específicos, junto con los métodos de muestreo empleados. Los conjuntos de datos de eventos de muestreo se generan siguiendo protocolos estandarizados, lo que permite a los investigadores analizar la abundancia de especies, la composición de comunidades y realizar comparaciones entre distintos momentos y lugares. Ejemplos comunes incluyen transectos de vegetación, censos de aves, programas de monitoreo y muestras de ADN ambiental. A diferencia de las observaciones ocasionales, estos datos son cuantitativos y calibrados, lo que los convierte en herramientas valiosas para identificar cambios y tendencias en las poblaciones. Además, al incorporar detalles sobre los protocolos y el esfuerzo de muestreo, es posible inferir la ausencia de especies y obtener una comprensión más profunda de los patrones de biodiversidad.

_Campos DwC obligatorios_
- eventID, también es necesario para los datos de registros biológicos asociados (para vincularlos)
- eventDate
- samplingProtocol

_Campos DwC recomendados_
- sampleSizeValue & sampleSizeUnit
- parentEventID, en situaciones en las que el evento es parte de una serie de eventos
- samplingEffort, para proporcionar evidencia del rigor del evento de muestreo
- locationID, en situaciones en las que la parcela/transecto muestreada tiene un identificador único
- decimalLatitude & decimalLongitude & geodeticDatum - para proporcionar un punto específico de ubicación
- footprintWKT & footprintSRS, para proporcionar una ubicación concreta
- countryCode
- occurrenceStatus, sólo para datos de registros biológicos asociados para registrar datos de presencia/ausencia.

[Descargá la plantilla](https://drive.google.com/uc?export=download&id=1n4F2PkBzN85trnhsgcxxhl6KQx12KI4Z){: .button .is-primary target="_blank"}

<br>

## Listas de especies
Son recursos que contienen un conjunto de especies agrupadas según alguna categoría, como criterios taxonómicos, geográficos, de riesgo (por ejemplo, listas rojas) o variedades silvestres relacionadas con cultivos. Estas listas pueden incluir información adicional, como clasificaciones jerárquicas o atributos específicos asociados a cada especie. Algunos ejemplos comunes incluyen listas de especies a nivel regional o global, listas rojas nacionales o internacionales, catálogos de especies en colecciones no digitalizadas, o inventarios de especies presentes en parques y áreas protegidas.

_Campos DwC obligatorios_
- taxonID
- scientificName
- taxonRank

_Campos DwC recomendados_
- kingdom - y otra taxonomía superior si es posible
- parentNameUsageID - en situaciones en las que se pretende publicar una taxonomía

[Descargá la plantilla](https://drive.google.com/uc?export=download&id=18IhayNCKr1ct12YpqIbvYczQPY37DByk){: .button .is-primary target="_blank"}
<br>
<br>
*Fuentes:*
- Adaptado de Wieczorek J, Blissett M, Braak K & Podolskiy M (2024) The GBIF Integrated Publishing Toolkit User Manual, version 3.0. Copenhagen: GBIF Secretariat. [https://ipt.gbif.org/manual/en/ipt/3.0/]([url](https://ipt.gbif.org/manual/en/ipt/3.0/))
- SiB Colombia (2024, octubre 10) Sistema de Información sobre Biodiversidad de Colombia. Recuperado de: [https://biodiversidad.co/](https://biodiversidad.co/){:target="_blank"}
