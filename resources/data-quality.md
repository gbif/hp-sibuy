---
layout: heroImage
title: Calidad de datos
description: |
  Documentos, herramientas y cursos para la validación y limpieza de datos que permiten asegurar su uso por una amplia variedad de audiencias.
background: https://upload.wikimedia.org/wikipedia/commons/a/a6/Serpiente_parejera_%28Philodryas_patagoniensis%29%2C_Uruguay%2C_2019.jpg
imageLicense: |
  Specimen of Philodryas patagoniensis  Fotografía de: Enrique González [Wikimedia Commons](https:https://en.wikipedia.org/wiki/en:National_Museum_of_Natural_History,_Uruguay)
toc: true
height: 41vh
lang-ref: data-quality
lang: es
---

La **calidad de datos** se puede definir como una característica esencial y necesaria para que los datos sean “adecuados para su uso” o tengan un “uso potencial valioso” [(Chapman, 2005)](https://assets.ctfassets.net/uo17ejk9rkwj/2gupj7dJIw62UeOUYiqSsm/0a4bb732bd7fd8cf28f7703dc20a43ba/Data_Quality_-_ENGLISH.pdf){:target="_blank"}.

Cuando los datos se utilizan sin tener una visión crítica sobre los posibles errores que contienen, los resultados de sus análisis pueden conducir a conclusiones erróneas y decisiones imprudentes basadas en evidencia poco confiable. Los datos tendrán calidad cuando la información derivada de los mismos representa correctamente el mundo real (los hechos).

Con el fin de que los datos generados influyan en la toma de decisiones, es importante tener en cuenta el concepto de **calidad de datos** a lo largo de toda la cadena de la información. A continuación se listan varios documentos y herramientas útiles para la validación, estructuración y limpieza de los datos sobre biodiversidad.


# Herramientas

## Limpieza y estructuración de datos 

Nombre | Descripción
------------ | ------------- 
[Darwin Core - Generador de Plantilla en Excel](https://gbif-norway.github.io/dwc-excel-template-generator-js/){:target="_blank"} | Esta herrramienta desarrollada por el nodo de GBIF Noruega, hace posible generar una plantilla Darwin Core (DwC) a partir de casillas de selección de cada uno de los elementos del estándar.
[Online UUID Generator](https://www.uuidgenerator.net/){:target="_blank"} | En caso de no contar con identificadores únicos para cada registro o evento de su conjunto de datos (*occurrenceID* o *eventID*), esta herrmaienta permite generar hasta 500 Identificadores Universales Únicos (UUID).
[EML generator - Generador de archivo EML](https://gbif-norway.github.io/eml-generator-js/){:target="_blank"} | Esta herrramienta desarrollada por el nodo de GBIF Noruega, hace posible generar un arhivo EML al diligenciar los campos del estándar, de modo que posteriormente puedan ser posteriormente cargados en el recurso de un IPT.
[Convertidor de tablas cruzadas a listas](https://gbif-norway.github.io/crosstab2list/){:target="_blank"} | Cuando los datos se encuentran organizados en tablas de dos dimensiones, esta sencilla herramienta, desarrollada por el nodo de GBIF Noruega, hace posible convertirlos a una lista unidimensional.
[OpenRefine](https://openrefine.org/){:target="_blank"} | Permite limpiar, transformar y dar formato a los datos, usar servicios web, corrección masiva campos, entre muchas otras. <br><br>[Aprendé más](https://biodiversidad.co/formacion/laboratorios/OpenRefine){: .button .is-small target="_blank"}
[OpenRefine - Scripts for biodiversity Data Quality](https://github.com/SIB-Colombia/data-quality-open-refine){:target="_blank"} | Repositorio de rutinas de calidad de datos implementadas en el software de código abierto [OpenRefine](https://openrefine.org/){:target="_blank"}, basado en herramientas informáticas libres, gratuitas y fáciles de utilizar.<br><br>[Aprendé más](https://biodiversidad.co/formacion/laboratorios/RutinasOpenRefine){: .button .is-small target="_blank"}
[Data Validator](https://www.gbif.org/es/tools/data-validator){:target="_blank"} | Detecta posibles problemas en la estructura y contenido de los conjuntos de datos, mejorando la calidad de estos para ser publicados a través del SIBUy, GBIF y OBIS.<br><br>[Aprendé más](https://biodiversidad.co/formacion/laboratorios/DataValidator){: .button .is-small target="_blank"}
[R Project](https://www.r-project.org/){:target="_blank"} | Permite limpiar y transformar datos a través de paquetes que son cargados al software.
[R Studio](https://rstudio.com/){:target="_blank"} | Facilita la visualización de la herramienta R Project e integra distintas ventanas funcionales.
[LifeWatch - Data Services](https://www.lifewatch.be/data-services/){:target="_blank"} | A través de la conexión con diferentes servicios web la herramienta permite validar formatos, elementos DwC de publicación en OBIS, taxonomía y geografía.
[IPT - Integrated Publishing Toolkit](https://cloud.gbif.org/uy/){:target="_blank"} | La Herramienta de Publicación (IPT) de GBIF es una aplicación web de código abierto, disponible de forma gratuita, que facilita la publicación de datos sobre biodiversidad. Durante el proceso de acompañamiento a la publicación de datos, el Equipo del SIB Uruguay le facilitará un usuario y contraseña para la documentación de los metadatos. <br><br>[Aprendé más](https://ipt.gbif.org/manual/es/ipt/latest/){: .button .is-small target="_blank"}


## Fechas

Nombre | Descripción
------------ | -------------
[Canadensys - Date parsing](https://data.canadensys.net/tools/dates){:target="_blank"} | Realiza la conversión masiva de fechas al formato ISO8601: AAAA-MM-DD.<br><br>[Aprendé más](https://biodiversidad.co/formacion/laboratorios/ConversionFechas){: .button .is-small target="_blank"}


## Validación de nombres y taxonomía

Nombre | Descripción
------------ | -------------
[Species Matching](https://www.gbif.org/tools/species-lookup){:target="_blank"} | Normaliza nombres de especies a partir de un archivo CSV de acuerdo al árbol taxonómico de GBIF. El archivo a someter debe contener una columna nombrada como 'scientificName' y opcionalmente la columna 'kingdom' (para el Reino) y 'id' (para un identificador). <br><br>[Aprendé más](https://biodiversidad.co/formacion/laboratorios/SpeciesMatching){: .button .is-small target="_blank"}
[WoRMS Taxon match](http://www.marinespecies.org/aphia.php?p=match){:target="_blank"} | Contrasta automáticamente una lista de especies o lista de taxones con World Register of Marine Species - WoRMS. Después de la coincidencia, la herramienta devolverá su archivo con los AphiaID, nombres válidos, autoridades, clasificación WoRMS y / o cualquier otra salida que haya seleccionado. Valida máx. 1500 registros. <br><br>[Aprendé más](https://biodiversidad.co/formacion/laboratorios/Worms){: .button .is-small target="_blank"}
[TNRS](https://tnrs.biendata.org/){:target="_blank"} | La herramienta TNRS por sus siglas en inglés (Taxonomic Name Resolution Service) permite estandarizar los nombres científicos botánicos a partir de fuentes taxonómicas como [Tropicos](https://www.tropicos.org/home){:target="_blank"}, [USDA](https://plants.sc.egov.usda.gov/home/){:target="_blank"} y [TPL](http://www.theplantlist.org/){:target="_blank"} con la lista dinámica del Catálogo de la Vida (Catalogue of Life).
[Global Names Resolver](https://resolver.globalnames.org/){:target="_blank"} | Resuelve listas de nombres científicos contra fuentes conocidas. Este servicio separa los nombres científicos, identifica coincidencias exactas o ambiguas y despliega un punta de coincidencia.
[Regi0](https://regi0.readthedocs.io/en/latest/){:target="_blank"} | Es un paquete de Python desarrollado por el *Programa de Evaluación y Monitoreo de la Biodiversidad del Instituto de Investigación de Recursos Biológicos Alexander von Humboldt*, con funciones útiles para complementar y verificar registros biológicos. Estas funciones están divididas en 2 módulos principales (geográfico y taxonómico) y se basan tanto en los datos del usuario como en varias API web  (e.g. GNR, IUCN and Species+).
[GBIF - Name parser](https://www.gbif.org/tools/name-parser){:target="_blank"} | Separa los nombres científicos en sus distintos componentes a partir del nombre introducido. Permite interpretar la mayoría de nombres científicos y atomizarlos independientemente de su código nomenclatural.
[Global Names Index](http://gni.globalnames.org/){:target="_blank"} | Permite corregir y/o enlazar la información acerca de cualquier taxón por medio de un proceso de "reconciliación" entre los nombres ya que contiene ejemplos de nombres científicos escritos con alguna variación.

## Calidad geográfica

Nombre | Descripción
------------ | -------------
[Canadensys - Coordinate conversion](https://data.canadensys.net/tools/coordinates){:target="_blank"} | Realiza la conversión masiva de coordenadas geográficas (grados, minutos y segundos) a grados decimales. <br><br>[Aprende más](https://biodiversidad.co/formacion/laboratorios/ConversionCoordenadas){: .button .is-small target="_blank"}
[MarineRegions](https://www.marineregions.org/){:target="_blank"} | Es una lista estándar de nombres y áreas marinas georeferenciadas a nivel global. Integra y brinda información geográfica desde el índice geográfico VLIMAR y la base de datos MARBOUND, y propone un estándar de ubicaciones, límites y regiones georeferenciadas marinas.
[ispecies](https://ispecies.org/){:target="_blank"} | Permite visualizar sobre un mapa los registros biológicos de una especie específica. Los registros están enlazados al Portal de datos de GBIF, donde se puede consultar información específica del espécimen.
[GEOLocate](https://www.geo-locate.org/){:target="_blank"} | Permite georreferenciar y confirmar localidades. Se encuentra también disponible la aplicación para escritorio.
[GPS Visualizer](https://www.gpsvisualizer.com/){:target="_blank"} | Permite crear mapas y perfiles a partir de datos geográficos. La entrada de los datos puede ser en forma de datos de GPS, rutas, direcciones de calles o coordenadas simples.
[GeoNames](http://www.geonames.org/){:target="_blank"} | Facilita la consulta de más de 10 millones de nombres geográficos, disponibles para descargar gratuitamente. Permite georreferenciar y confirmar localidades.
[OBIS map tool](https://obis.org/maptool/){:target="_blank"} | Se puede utilizar para geocodificar ubicaciones para  emparejar pares de coordenadas o cadenas de coordenadas en formato WKT. Las cadenas WKT son representaciones textuales de geometrías como puntos, polígonos y líneas.
[Calculadora Geodésica](http://sumapa.com/geocalc/geocalc.cfm){:target="_blank"} | Permite la conversión o transformación coordenadas en hasta 18 sistemas diferentes.
[OBIS Plotter](http://iobis.github.io/plotter/){:target="_blank"} | Es una herramienta muy simple para revisar rápidamente puntos en un mapa. Requiere de entrada un formato de texto delimitado (por ejemplo, CSV o pegado de Excel) y que los datos tengan una columna de longitud decimal: 'decimalLongitude'; y latitud decimal: 'decimalLatitude' para las corrdenadas . Así, es posible seleccionar un campo de interés a partir de la tabla original para cambiar el color de los puntos y la etiqueta que se muestra cuando se hace clic en un punto específico. <br><br>[Aprende más](https://biodiversidad.co/formacion/laboratorios/VisualizacionOBIS_Plotter){: .button .is-small target="_blank"}
[geo:truc](http://www.geotruc.net/?hl=es_ES){:target="_blank"} | Permite obtener las coordenadas de un punto seleccionado en el mapa a través de google maps.
[CartoDB](https://carto.com/){:target="_blank"} | Permite importar y visualizar datos geoespaciales mediante la creación de mapas dinámicos.
[infoXY](http://splink.cria.org.br/infoxy?criaLANG=en){:target="_blank"} | Al ingresar coordenadas decimales la herramienta retorna información sobre cada punto, como el nombre del país, departamento y otras divisiones politico-administrativas. Si el punto cae en el mar la herramienta calcula la distancia más cercana a la costa, indicando el nombre del país.
[GeoPick](https://geopick.gbif.org){:target="_blank"} | GeoPick es una herramienta complementaria en línea de código abierto basada en la [Guía de buenas prácticas de georreferenciación](https://docs.gbif.org/georeferencing-best-practices/1.0/es/){:target="_blank"} (Chapman A.D. y Wieczorek J.R., 2020) que sigue sus recomendaciones y prácticas. Su idea surgió en el marco del trabajo realizado en el Museu de Ciències Naturals de Barcelona (MCNB) y la MOBILISE Cost Action. Su objetivo es proporcionar a los georreferenciadores una herramienta sencilla, fácil de usar y, a la vez, potente que les ayude a seguir las mejores prácticas de georreferenciación y los estándares de datos (i.e., Darwin Core). El principio rector de su diseño es seguir siendo lo más simple y fácil de usar posible.

# Cursos

Nombre | Año | Descripción
------------ | ------------- | -------------
[Introducción a GBIF](https://docs.gbif.org/course-introduction-to-gbif/es/){:target="_blank"} | 2021 | Este curso proporciona una introducción a GBIF, los datos disponibles en el portal de GBIF, cómo acceder a esos datos, e información sobre como participar en GBIF y su comunidad de práctica.
[Curso de Movilización de Datos sobre Biodiversidad](https://docs.gbif.org/course-introduction-to-gbif/es/){:target="_blank"} | 2021 | Este curso permitirá a los participantes planificar e implementar de manera eficaz los esfuerzos de movilización de datos de biodiversidad utilizando estándares aceptados por la comunidad. Su objetivo es aumentar el volumen, la riqueza y la calidad de los datos publicados a través de la red GBIF.
[Ciclo de formación virtual SiB Colombia](https://biodiversidad.co/formacion/laboratorios/){:target="_blank"} | 2021 | Los laboratorios de datos diseñados e instruidos por el EC-SiB te ayudarán a afianzar tus habilidades en el manejo y publicación de datos a través de SiB Colombia.


# Documentos

## Limpieza y estructuración de datos

Nombre       | Año   | Descripción
------------ |-------| ---------
[Principios de calidad de datos](https://www.gbif.org/document/80509/principles-of-data-quality){:target="_blank"} | 2005 | Principios de calidad de datos y mejores practicas aplicables a datos primarios sobre biodiversidad en sus compenentes, taxonómicos, temporales y geográficos.
[Guía para la limpieza de datos sobre biodiversidad con OpenRefine](https://docs.gbif.org/openrefine-guide/3.0/es/){:target="_blank"} | 2021 | Guía de uso de [OpenRefine](https://openrefine.org/){:target="_blank"} para la validación y limpieza de datos sobre biodiversidad.
[OpenRefine - Guía  básica](http://repository.humboldt.org.co/handle/20.500.11761/35350){:target="_blank"} |2020| Guía básica de uso de [OpenRefine](https://openrefine.org/){:target="_blank"} para la validación y limpieza de datos sobre biodiversidad.
[OpenRefine - Guía  de validación y limpieza de datos sobre biodiversidad](http://repository.humboldt.org.co/handle/20.500.11761/35350){:target="_blank"} | 2020 | Guía de uso de rutinas de calidad de datos implementando en el entorno del software de código abierto [OpenRefine](https://openrefine.org/){:target="_blank"}, y permiten crear flujos de trabajo específicos para cada conjunto de datos (Registros, Listas, Eventos).
[Calidad de Datos Guía de herramientas para mejorar los datos primarios de biodiversidad](http://repository.humboldt.org.co/handle/20.500.11761/35351){:target="_blank"} | 2015 | Este documento es una recopilación de las diversas herramientas y prácticas que intentan facilitar el proceso de dar calidad a los datos primarios sobre biodiversidad a través de distintas metodologías.


## Validación de información geográfica

Nombre       | Año   | Descripción
------------ | ------------- | -------------
[Guía de buenas prácticas de georreferenciación](https://docs.gbif.org/georeferencing-best-practices/1.0/es/){:target="_blank"} | 2020 | La Guía de buenas prácticas de georreferenciación provee los lineamientos para la correcta georreferenciación. Aunque está dirigida específicamente a registros biológicos, los conceptos y métodos presentados aquí pueden ser igual de útiles en otras disciplinas.
[Guía rápida de georreferenciación](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/es/){:target="_blank"} | 2020 | Este documento ofrece orientaciones sobre cómo georreferenciar usando el método radio punto. También, proporciona los métodos para determinar los límites de entidades geográficas, los cuales son la base del método de forma geométrica en georreferenciación
[Manual de la calculadora de georreferenciación](https://docs.gbif.org/georeferencing-calculator-manual/1.0/es/){:target="_blank"} | 2020 | La Calculadora de Georreferenciación (Wieczorek & Wieczorek 2020) descrita en este documento, es una herramienta creada para ayudar en la georreferenciación de localidades descriptivas.
[Protocolo de georreferenciación de localidades](http://repository.humboldt.org.co/handle/20.500.11761/35180){:target="_blank"} | 2016 | Este documento desarollado desde el SiB Colombia con el apoyo del Instituto Humboldt, define la metodología para la asignación de coordenadas en datos primarios sobre biodiversidad.


## Buenas prácticas de publicación

Nombre       | Año   | Descripción
------------ | ------------- | -------------
[Buenas prácticas para generalizar datos de especies sensibles en registros biológicos](https://docs.gbif.org/sensitive-species-best-practices/master/es/){:target="_blank"} | 2021 | El objetivo de este documento es proporcionar las buenas prácticas (o las buenas prácticas actuales) para tratar los datos de presencia de especies sensibles, y orientar sobre cómo poner a disposición la mayor cantidad de datos sin que la especie se vea expuesta por el hecho de que los datos se hayan puesto en el dominio público.
[Buenas prácticas para la publicación de datos sobre biodiversidad procedentes de evaluaciones de impacto ambiental](https://docs.gbif.org/eia-best-practices/1.0/es/){:target="_blank"} | 2021 | Esta guía pretende ayudar a los profesionales, consultores y otras "partes interesadas y afectadas "(I&AP por sus siglas en inglés) que trabajan con evaluaciones de impacto ambiental a mejorar la curaduría, el almacenamiento y la gestión de los datos primarios sobre biodiversidad obtenidos durante los procesos de evaluación de impacto ambiental (EIA) y a compartir los datos de forma libre y abierta en formatos estandarizados, accesibles e interoperables a través del Infraestructura Mundial de Información en Biodiversidad (GBIF por sus siglas en inglés).

