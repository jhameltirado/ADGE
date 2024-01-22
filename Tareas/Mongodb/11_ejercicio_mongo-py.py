#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Nov 23 12:56:25 2023

@author: jhameltb
"""

# EJERCICIO PYTHON-MONGO 1

from pymongo import MongoClient

conexion=MongoClient('mongodb://localhost:27017')

db = conexion['datosdb']

# De los archivos de datos descargados importar el archivo zip.json, y desarrollar las siguientes búsquedas:

    # Determinar cuantos documentos se tiene del estado de Nueva York.
    
result = db.zips.find(
    {"state":"NY"}
    ).count()

print("Determinar cuantos documentos se tiene del estado de Nueva York: ", result, "\n\n")

    # Determinar las ciudades registradas para el estado de california, mostrando el nombre 

print("Determinar las ciudades registradas para el estado de california, mostrando el nombre : \n")

misDocumentos = db.zips.find(
    {"state": "CA"}, 
    {"_id": 0, "city": 1});


for documento in misDocumentos:
        print (documento)

print("\n\n")

    # Determinar los códigos postales de la ciudad de San francisco. Mostrando las coordenadas de cada uno de ellos.

print("Determinar los códigos postales de la ciudad de San francisco. Mostrando las coordenadas de cada uno de ellos: \n")

misDocumentos = db.zips.find(
    {"city": "San Francisco"}, 
    {"_id": 0, "postal_code": 1, "coordinates": 1});

for documento in misDocumentos:
        print (documento)


