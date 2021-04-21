---
layout: default
title: '¿Qué son los estándares de datos de biodiversidad?'
description: 'Estándares de datos de biodiversidad'
toc: true
---

# ¿Qué son los estándares de datos de biodiversidad?

Los datos e información disponible a través de **SIBUy**, **GBIF.org** y sus servicios asociados son el resultado de una red de organizaciones y personas que utilizan un lenguaje común para describir, registrar y estructurar miles de conjuntos de datos muy diversos. El uso de **estándares** comunes y globalmente aceptados es el mecanismo principal para integrar los cientos de millones de registros primarios de biodiversidad en GBIF.

En el contexto de la biodiversidad, uno de los grupos más activos en el desarrollo y mantenimiento de **estándares** de datos a nivel mundial es [*Biodiversity Information Standards*](http://www.tdwg.org/) (Estándares para la Información de la Biodiversidad). Como afiliado de la [*International Union of Biological Science*](http://www.iubs.org/) (Unión Internacional de Ciencias Biológicas), esta asociación científica y académica sin fines de lucro, se enfoca en el desarrollo de **estándares** para el intercambio de datos e información sobre biodiversidad. Los miembros de esta comunidad generalmente nos referimos a este grupo como TDWG (pronunciado tad-wig), en honor a sus orígenes como Taxonomic Databases Working Group.


## Estándares más usados

### Darwin Core

El estándar **Darwin Core** (DwC) ofrece un marco estable, sencillo y flexible para recopilar datos sobre biodiversidad procedentes de diferentes fuentes. La mayoría de los conjuntos de datos compartidos a través de GBIF.org se publican utilizando el formato *Darwin Core Archive* (DwC-A).

- [¿Qué es Darwin Core y por qué es importante?](https://www.gbif.org/es/darwin-core)
- [Términos del estándar Darwin Core](https://gcube.wiki.gcube-system.org/gcube/Darwin_Core_Terms) (a través de la Wiki de Gcube)
- [Manual de Darwin Core de OBIS](https://obis.org/manual/darwincore/)
 
### Plinian Core
El estándar **Plinian Core** (PliC) es un estándar para compartir información principalmente a nivel de especie. Fue concebido como una forma de publicar información sobre especies y hacerla interoperable. Por 'información de especies' nos referimos a todo tipo de propiedades y rasgos relacionados con los taxones (de cualquier rango), incluidas descripciones, nomenclatura, estado de conservación, manejo, historia natural, etc. Por lo tanto, el alcance de Plinian Core va más allá de las descripciones taxonómicas. 

- [Conoce más sobre el Plinian Core](https://github.com/tdwg/PlinianCore/wiki/About)
 
### EML
**EML** o *Ecological Metadata Language*, es un estándar para metadatos que recoge información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través de GBIF.org se basan en 'metadatos' — es decir, la información sobre los datos — y utilizan el estándar **EML** de código abierto, que administra y mantiene [*The Knowledge Network for Biocomplexity](https://knb.ecoinformatics.org/).

Cada *Darwin Core Archive* incluye como uno de sus componentes un archivo **EML** (escrito en formato XML). Este perfil del EML es conocido como Perfil de Metadatos de GBIF o GMP (GBIF Metadata Profile)
 
- [Perfil de metadatos de GBIF: Guía de procedimientos](https://github.com/gbif/ipt/wiki/GMPHowToGuide)
- [Estándar EML](https://knb.ecoinformatics.org/#external//emlparser/docs/index.html)
  
### BioCASe / ABCD
El [*Biological Collection Access Service](http://www.biocase.org/) (Servicio de Acceso a Colecciones Biológicas), comúnmente conocido como **BioCASe**, es una red internacional que vincula datos de colecciones biológicas de museos de historia natural, jardines botánicos / zoológicos e instituciones de investigación. **BioCASe** se basa en el estándar de intercambio de datos de *Access to Biological Collections Data* (ABCD) (Acceso a Datos de Colecciones Biológicas), que TDWG también administra.

- [Protocolo BioCASe](http://www.biocase.org/products/protocols)
- [Acceso de los usuarios de los datos de BioCASe a través de GBIF.org](http://www.biocase.org/whats_biocase/gbif_downloads.cgi?view=2)
