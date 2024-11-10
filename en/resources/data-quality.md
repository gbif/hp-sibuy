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
lang: en
---

**Data quality** can be defined as an essential and necessary characteristic for data to be "fit for use" or have "potential valuable use" [(Chapman, 2005)](https://assets.ctfassets.net/uo17ejk9rkwj/2gupj7dJIw62UeOUYiqSsm/0a4bb732bd7fd8cf28f7703dc20a43ba/Data_Quality_-_ENGLISH.pdf){:target=“_blank”}.

When data are used without a critical view of the potential errors they contain, the results of their analysis can lead to erroneous conclusions and unwise decisions based on unreliable evidence. Data will have quality when the information derived from it correctly represents the real world (the facts).

In order for the data generated to influence decision making, it is important to consider the concept of **data quality** throughout the entire information chain. Listed below are several useful documents and tools for validating, structuring and cleaning biodiversity data.


# Tools

## Data cleaning and structuring

Name | Description
------------ | ------------- 
[Darwin Core - Excel Template Generator](https://gbif-norway.github.io/dwc-excel-template-generator-js/){:target="_blank"} | This tool, developed by the GBIF Norway node, makes it possible to generate a Darwin Core (DwC) template from checkboxes for each of the elements of the standard.
[Online UUID Generator](https://www.uuidgenerator.net/){:target="_blank"} | In case you do not have unique identifiers for each record or event in your dataset (*occurrenceID* or *eventID*), this tool allows you to generate up to 500 Universally Unique Identifiers (UUID).
[EML generator](https://gbif-norway.github.io/eml-generator-js/){:target="_blank"} | This tool, developed by the GBIF Norway node, makes it possible to generate an EML file by filling in the standard fields, so that they can later be loaded into an IPT resource.
[Cross-table to list converter](https://gbif-norway.github.io/crosstab2list/){:target="_blank"} | When data are organized in two-dimensional tables, this simple tool, developed by the GBIF Norway node, makes it possible to convert them to a one-dimensional list.
[OpenRefine](https://openrefine.org/){:target="_blank"} | It allows you to clean, transform and format data, use web services, mass field correction, among many others. <br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/OpenRefine){: .button .is-small target="_blank"}
[OpenRefine - Scripts for biodiversity Data Quality](https://github.com/SIB-Colombia/data-quality-open-refine){:target="_blank"} | Repository of data quality routines implemented in open source software. [OpenRefine](https://openrefine.org/){:target="_blank"}, based on free, free and easy-to-use software tools. <br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/RutinasOpenRefine){: .button .is-small target="_blank"}
[Data Validator](https://www.gbif.org/es/tools/data-validator){:target="_blank"} | It detects possible problems in the structure and content of the datasets, improving the quality of these to be published through SIBUy, GBIF and OBIS.<br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/DataValidator){: .button .is-small target="_blank"}
[R Project](https://www.r-project.org/){:target="_blank"} | It allows to clean and transform data through packets that are uploaded to the software.
[R Studio](https://rstudio.com/){:target="_blank"} | Facilitates the visualization of the R Project tool and integrates different functional windows.
[LifeWatch - Data Services](https://www.lifewatch.be/data-services/){:target="_blank"} | Through the connection with different web services, the tool allows the validation of formats, DwC elements for publication in OBIS, taxonomy and geography.
[IPT - Integrated Publishing Toolkit](https://cloud.gbif.org/uy/){:target="_blank"} | The GBIF Publication Tool (IPT) is an open source web application, available free of charge, that facilitates the publication of biodiversity data. During the process of accompanying the data publication, the SIB Uruguay Team will provide you with a user and password for metadata documentation. <br><br>[Learn more](https://ipt.gbif.org/manual/es/ipt/latest/){: .button .is-small target="_blank"}


## Dates

Name | Description
------------ | -------------
[Canadensys - Date parsing](https://data.canadensys.net/tools/dates){:target="_blank"} | Performs massive date conversion to ISO8601 format: YYYYY-MM-DD. <br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/ConversionFechas){: .button .is-small target="_blank"}


## Name and taxonomy validation

Name | Description
------------ | -------------
[Species Matching](https://www.gbif.org/tools/species-lookup){:target="_blank"} | Normalize species names from a CSV file according to the GBIF taxonomic tree. The file to be submitted must contain a column named 'scientificName' and optionally the column 'kingdom' (for the Kingdom) and 'id' (for an identifier). <br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/SpeciesMatching){: .button .is-small target="_blank"}
[WoRMS Taxon match](http://www.marinespecies.org/aphia.php?p=match){:target="_blank"} | Automatically check a species list or taxon list against the World Register of Marine Species - WoRMS. After matching, the tool will return your file with AphiaIDs, valid names, authorities, WoRMS classification and/or any other output you have selected. Validates max. 1500 records. <br><br>[https://biodiversidad.co/](https://biodiversidad.co/formacion/laboratorios/Worms){: .button .is-small target="_blank"}
[TNRS](https://tnrs.biendata.org/){:target="_blank"} | The TNRS (Taxonomic Name Resolution Service) tool allows the standardization of botanical scientific names from taxonomic sources, such as [Tropicos](https://www.tropicos.org/home){:target="_blank"}, [USDA](https://plants.sc.egov.usda.gov/home/){:target="_blank"} y [TPL](http://www.theplantlist.org/){:target="_blank"} with the dynamic list of the Catalogue of Life.
[Global Names Resolver](https://resolver.globalnames.org/){:target="_blank"} | Resolves lists of scientific names against known sources. This service separates scientific names, identifies exact or ambiguous matches, and displays a matching tip.
[Regi0](https://regi0.readthedocs.io/en/latest/){:target="_blank"} | It is a Python package developed by the *Biodiversity Assessment and Monitoring Program of the Alexander von Humboldt Biological Resources Research Institute*, with useful functions to complement and verify biological records. These functions are divided into 2 main modules (geographic and taxonomic) and are based on both user data and various web APIs (e.g. GNR, IUCN and Species+).
[GBIF - Name parser](https://www.gbif.org/tools/name-parser){:target="_blank"} | Separates scientific names into their various components from the name entered. It allows to interpret most scientific names and to atomize them independently of their nomenclatural code.
[Global Names Index](http://gni.globalnames.org/){:target="_blank"} | It allows correcting and/or linking information about any taxon through a process of "reconciliation" between names, since it contains examples of scientific names written with some variation.

## Geographical cleanliness

Name | Description
------------ | -------------
[Canadensys - Coordinate conversion](https://data.canadensys.net/tools/coordinates){:target="_blank"} | Performs mass conversion of geographic coordinates (degrees, minutes and seconds) to decimal degrees. <br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/ConversionCoordenadas){: .button .is-small target="_blank"}
[MarineRegions](https://www.marineregions.org/){:target="_blank"} | It is a standard list of globally geo-referenced marine names and areas. It integrates and provides geographic information from the VLIMAR geographic index and the MARBOUND database, and proposes a standard of marine locations, boundaries and georeferenced regions.
[ispecies](https://ispecies.org/){:target="_blank"} | It allows to visualize on a map the biological records of a specific species. The records are linked to the GBIF Data Portal, where specimen-specific information can be consulted.
[GEOLocate](https://www.geo-locate.org/){:target="_blank"} | Allows georeferencing and confirmation of locations. A desktop application is also available.
[GPS Visualizer](https://www.gpsvisualizer.com/){:target="_blank"} | Permite crear mapas y perfiles a partir de datos geográficos. La entrada de los datos puede ser en forma de datos de GPS, rutas, direcciones de calles o coordenadas simples.
[GeoNames](http://www.geonames.org/){:target="_blank"} | Allows you to create maps and profiles from geographic data. Data input can be in the form of GPS data, routes, street addresses or simple coordinates.
[OBIS map tool](https://obis.org/maptool/){:target="_blank"} | It can be used to geocode locations to match coordinate pairs or coordinate strings in WKT format. WKT strings are textual representations of geometries such as points, polygons and lines.
[Calculadora Geodésica](http://sumapa.com/geocalc/geocalc.cfm){:target="_blank"} | Allows the conversion or transformation of coordinates in up to 18 different systems.
[OBIS Plotter](http://iobis.github.io/plotter/){:target="_blank"} | It is a very simple tool to quickly check points on a map. It requires input a delimited text format (e.g. CSV or Excel paste) and that the data have a decimal longitude column: 'decimalLongitude'; and decimal latitude: 'decimalLatitude' for the coordinates. Thus, it is possible to select a field of interest from the original table to change the color of the points and the label displayed when a specific point is clicked. <br><br>[Learn more](https://biodiversidad.co/formacion/laboratorios/VisualizacionOBIS_Plotter){: .button .is-small target="_blank"}
[geo:truc](http://www.geotruc.net/?hl=en_US){:target="_blank"} | Allows to obtain the coordinates of a selected point on the map through google maps.
[CartoDB](https://carto.com/){:target="_blank"} | Allows you to import and visualize geospatial data by creating dynamic maps.
[infoXY](http://splink.cria.org.br/infoxy?criaLANG=en){:target="_blank"} | When entering decimal coordinates the tool returns information about each point, such as the name of the country, department and other political-administrative divisions. If the point falls on the sea the tool calculates the nearest distance to the coast, indicating the name of the country.
[GeoPick](https://geopick.gbif.org){:target=“_blank”} | GeoPick is a complementary open source online tool based on the [Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/){:target="_blank"} (Chapman A.D. and Wieczorek J.R., 2020) that follows its recommendations and practices. Their idea arose from work done at the Museu de Ciències Naturals de Barcelona (MCNB) and the MOBILISE Cost Action. It aims to provide georeferencers with a simple, easy-to-use, yet powerful tool to help them follow georeferencing best practices and data standards (i.e., Darwin Core). The guiding principle of its design is to remain as simple and easy to use as possible.

# Courses

Name | Year | Description
------------ | ------------- | -------------
[Introduction to GBIF](https://docs.gbif.org/course-introduction-to-gbif/en/){:target="_blank"} | 2021 | This course provides an introduction to GBIF, the data available on the GBIF portal, how to access that data, and information on how to participate in GBIF and its community of practice.
[Biodiversity Data Mobilization Course](https://docs.gbif.org/course-introduction-to-gbif/en/){:target="_blank"} | 2021 | This course will enable participants to effectively plan and implement biodiversity data mobilization efforts using community accepted standards. It aims to increase the volume, richness and quality of data published through the GBIF network.
[Virtual training cycle SiB Colombia](https://biodiversidad.co/formacion/laboratorios/){:target="_blank"} | 2021 | The data labs designed and instructed by EC-SiB will help you to strengthen your skills in data management and publication through SiB Colombia.


# Documents

## Data cleaning and structuring

Name       | Year   | Description
------------ |-------| ---------
[Principles of Data Quality ](https://www.gbif.org/document/80509/principles-of-data-quality){:target="_blank"} | 2005 | Data quality principles and best practices applicable to primary biodiversity data in their taxonomic, temporal and geographic components.
[Guide to cleaning biodiversity data with OpenRefine](https://docs.gbif.org/openrefine-guide/3.0/es/){:target="_blank"} | 2021 | Guide to openrefine use [OpenRefine](https://openrefine.org/){:target="_blank"} for validation and cleaning of biodiversity data.
[OpenRefine - Basic Guide](http://repository.humboldt.org.co/handle/20.500.11761/35350){:target="_blank"} | 2020 | Guide to openrefine use [OpenRefine](https://openrefine.org/){:target="_blank"} for validation and cleaning of biodiversity data.
[OpenRefine - Guide to validation and cleaning of biodiversity data](http://repository.humboldt.org.co/handle/20.500.11761/35350){:target="_blank"} | 2020 | Guide to the use of data quality routines implemented in openrefine open source software environment [OpenRefine](https://openrefine.org/){:target="_blank"}, and allows to create specific workflows for each dataset (Records, Lists, Events).
[Data Quality - A toolkit for improving primary biodiversity data](http://repository.humboldt.org.co/handle/20.500.11761/35351){:target="_blank"} | 2015 | This document is a compilation of the various tools and practices that attempt to facilitate the process of providing quality primary biodiversity data through different methodologies.


## Validation of geographic information

Name       | Year   | Description 
------------ | ------------- | -------------
[Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/){:target="_blank"} | 2020 | The Guide to Good Georeferencing Practices provides guidelines for proper georeferencing. Although it is aimed specifically at biological records, the concepts and methods presented here can be equally useful in other disciplines.
[Georeferencing Quick Reference Guide](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/){:target="_blank"} | 2020 | This document provides guidance on how to georeference using the radius point method. It also provides methods for determining the boundaries of geographic entities, which are the basis of the geometric shape method in georeferencing.
[Georeferencing Calculator Manual](https://docs.gbif.org/georeferencing-calculator-manual/1.0/en/){:target="_blank"} | 2020 | The Georeferencing Calculator (Wieczorek & Wieczorek 2020) described in this paper is a tool created to assist in georeferencing descriptive localities.
[Protocol for georeferencing localities](http://repository.humboldt.org.co/handle/20.500.11761/35180){:target="_blank"} | 2016 | This document, developed by SiB Colombia with the support of the Humboldt Institute, defines the methodology for assigning coordinates to primary biodiversity data.


## Good publication practices

Name       | Year   | Description 
------------ | ------------- | -------------
[Current Best Practices for Generalizing Sensitive Species Occurrence Data](https://docs.gbif.org/sensitive-species-best-practices/master/en/){:target="_blank"} | 2021 | The objective of this document is to provide good practice (or current good practice) for dealing with sensitive species occurrence data, and to provide guidance on how to make as much data available as possible without exposing the species by the fact that the data have been placed in the public domain.
[Best Practices for Publishing Biodiversity Data from Environmental Impact Assessments](https://docs.gbif.org/eia-best-practices/1.0/en/){:target="_blank"} | 2021 | This guide aims to help practitioners, consultants and other "interested and affected parties" (I&APs) working with environmental impact assessments to improve the curation, storage and management of primary biodiversity data obtained during environmental impact assessment (EIA) processes and to share the data freely and openly in standardized, accessible and interoperable formats through the Global Biodiversity Information Facility (GBIF).

