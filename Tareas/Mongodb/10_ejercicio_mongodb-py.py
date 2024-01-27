#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jan 27 11:19:13 2024

@author: jhameltb
"""

from pymongo import MongoClient

def consulta01(edad_buscar):
    
    conexion=MongoClient('mongodb://localhost:27017')
    db = conexion['datosdb']
    documentos = db.people.find()

    for documento in documentos:
        edad = documento.get("age")
        nombre = documento.get("name", "Nombre no proporcionado")
        
        if edad is not None and edad == edad_buscar:
            print(f"Nombre: {nombre}")


consulta01(30)  