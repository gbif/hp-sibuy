---
layout: default
title: Preguntas frecuentes
description: En esta sección podés encontrar información sobre el SIBUy.
permalink: /faq/
toc: true
lang-ref: faq
lang: es
---
En esta sección podés encontrar información sobre el SIBUy.

# ¿Por qué compartir datos de biodiversidad?

En Uruguay la falta de sistemas de información ambiental, particularmente vinculados a la biodiversidad, siguen siendo una necesidad. En este sentido, la falta de articulación entre instituciones públicas y privadas, tanto del ámbito académico como de la gestión, es una de las mayores debilidades. A su vez, el no contar con un sistema que reúna la información sobre biodiversidad con la que cuenta el país, dificulta los procesos de evaluación ambiental y la identificación de vacíos de información.   

En este contexto, **SIBUy** invita a publicar, y por tanto compartir, datos de biodiversidad para facilitar la investigación y la gestión de la biodiversidad, disponiendo también los datos al conjunto de la sociedad. Para la publicación de datos se utiliza un formato estándar globalmente aceptado ([Darwin Core](https://dwc.tdwg.org/terms/){:target="_blank"}), ofreciendo libre acceso y aprovechamiento de acuerdo con las licencias de uso establecidas por cada conjunto de datos. En todos los casos los colectores, generadores, y custodios de los datos son quienes reciben el crédito correspondiente.

# ¿Cómo pueden aportar los datos a la toma de decisiones? 

La disponibilidad de información es fundamental para tomar decisiones de gestión con base científica. Los datos de biodiversidad publicados a través de portales nacionales y gbif.org han sido utilizados por ejemplo para modelar la distribución de especies o identificar sitios con vacíos de información. Estos trabajos contribuyen a definir donde realizar esfuerzos de muestreo para completar inventarios de especies y para definir sitios prioritarios de conservación. 

En la sección [Noticias](/news/) podrás conocer más acerca de cómo los datos sobre la biodiversidad de Uruguay han sido utilizados para trabajos de investigación que contribuyen con la conservación y uso sostenible de la diversidad biológica.

# ¿Qué datos se pueden compartir?

Por el momento el portal de datos del **SIBUy** permite la publicación de registros biológicos que pueden provenir de diversas fuentes como colecciones biológicas, inventarios de especies para evaluaciones ambientales, monitoreos con cámaras trampa, entre otros. 

Para publicar la estructura de los datos debe seguir el estándar [Darwin Core](https://dwc.tdwg.org/terms/){:target="_blank"}. Si bien este estándar requiere asociar al registro una cantidad importante de información lo cual recomendamos, también es muy valioso compartir datos aunque puedan considerarse incompletos. Para ello se ha definido una lista de campos obligatorios para la publicación de datos, siendo el resto optativos.

# ¿Qué son los estándares de datos de biodiversidad?

Los datos e información disponible a través de **SIBUy**, **GBIF.org** y sus servicios asociados son el resultado de una red de organizaciones y personas que utilizan un lenguaje común para describir, registrar y estructurar miles de conjuntos de datos muy diversos. El uso de **estándares** comunes y globalmente aceptados es el mecanismo principal para integrar los cientos de millones de registros primarios de biodiversidad en GBIF.

En el contexto de la biodiversidad, uno de los grupos más activos en el desarrollo y mantenimiento de **estándares** de datos a nivel mundial es [*Biodiversity Information Standards*](http://www.tdwg.org/){:target="_blank"} (Estándares para la Información de la Biodiversidad). Como afiliado de la [*International Union of Biological Science*](http://www.iubs.org/){:target="_blank"} (Unión Internacional de Ciencias Biológicas), esta asociación científica y académica sin fines de lucro, se enfoca en el desarrollo de **estándares** para el intercambio de datos e información sobre biodiversidad. Los miembros de esta comunidad generalmente nos referimos a este grupo como TDWG (pronunciado tad-wig), en honor a sus orígenes como Taxonomic Databases Working Group.


## Estándares más usados

### Darwin Core

El estándar **Darwin Core** (DwC) ofrece un marco estable, sencillo y flexible para recopilar datos sobre biodiversidad procedentes de diferentes fuentes. La mayoría de los conjuntos de datos compartidos a través de GBIF.org se publican utilizando el formato *Darwin Core Archive* (DwC-A).

- [¿Qué es Darwin Core y por qué es importante?](https://www.gbif.org/es/darwin-core){:target="_blank"}
- [Términos del estándar Darwin Core](https://gcube.wiki.gcube-system.org/gcube/Darwin_Core_Terms){:target="_blank"} (a través de la Wiki de Gcube)
- [Manual de Darwin Core del SiB Colombia](https://biodiversidad.co/elementos-darwin-core){:target="_blank"}
 
### Plinian Core

El estándar **Plinian Core** (PliC) es un estándar para compartir información principalmente a nivel de especie. Fue concebido como una forma de publicar información sobre especies y hacerla interoperable. Por 'información de especies' nos referimos a todo tipo de propiedades y rasgos relacionados con los taxones (de cualquier rango), incluidas descripciones, nomenclatura, estado de conservación, manejo, historia natural, etc. Por lo tanto, el alcance de Plinian Core va más allá de las descripciones taxonómicas. 

- [Conoce más sobre el Plinian Core](https://github.com/tdwg/PlinianCore/wiki/About){:target="_blank"}
 
### EML

**EML** o *Ecological Metadata Language*, es un estándar para metadatos que recoge información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través de GBIF.org se basan en 'metadatos' — es decir, la información sobre los datos — y utilizan el estándar **EML** de código abierto, que administra y mantiene [The Knowledge Network for Biocomplexity](https://knb.ecoinformatics.org/){:target="_blank"}.

Cada *Darwin Core Archive* incluye como uno de sus componentes un archivo **EML** (escrito en formato XML). Este perfil del EML es conocido como Perfil de Metadatos de GBIF o GMP (GBIF Metadata Profile)
 
- [Perfil de metadatos de GBIF: Guía de procedimientos](https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile){:target="_blank"}
- [Estándar EML](https://eml.ecoinformatics.org/){:target="_blank"}
  
### BioCASe / ABCD

El [Biological Collection Access Service](http://www.biocase.org/){:target="_blank"} (Servicio de Acceso a Colecciones Biológicas), comúnmente conocido como **BioCASe**, es una red internacional que vincula datos de colecciones biológicas de museos de historia natural, jardines botánicos / zoológicos e instituciones de investigación. **BioCASe** se basa en el estándar de intercambio de datos de *Access to Biological Collections Data* (ABCD) (Acceso a Datos de Colecciones Biológicas), que TDWG también administra.

- [Protocolo BioCASe](http://www.biocase.org/products/protocols){:target="_blank"}
- [Acceso de los usuarios de los datos de BioCASe a través de GBIF.org](http://www.biocase.org/whats_biocase/gbif_downloads.cgi?view=2){:target="_blank"}


# ¿Cómo puedo convertirme en una organización publicadora de datos?

Las instituciones u organizaciones que quieran publicar sus datos a través del Sistema de Información de Biodiversidad de Uruguay en GBIF.org, deben completar un formulario de registro. Luego de tener la aprobación del nodo GBIF de Uruguay recibirán un usuario para publicar sus datos a través de la herramienta IPT.

Puede acceder al formulario [AQUÍ](https://forms.gle/zibJmZEsJwbxuPok9){:target="_blank"}

Por cualquier consulta puede mandar un mail a [biodiversidad@ambiente.gub.uy](mailto:biodiversidad@ambiente.gub.uy)

