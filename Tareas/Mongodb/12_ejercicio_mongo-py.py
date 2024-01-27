# EJERCICIO PYTHON-MONGO 1

from pymongo import MongoClient

conexion=MongoClient('mongodb://localhost:27017')

db = conexion['datosdb']

# De los archivos de datos descargados importar el archivo restaurants.json, y desarrollar las siguientes búsquedas:

    # Determinar los restaurantes que han tenido grado B en el barrio del Bronx:
    
misDocumentos = db.restaurants.find(
    {
    "borough": "Bronx","grades.grade": "B"
    },
    {
    "_id": 0,"name": 1, "grades.grade": 1, "borough": 1
    }
);

print("Restaurantes en el Bronx con grado B:")
for documento in misDocumentos:
    print(documento)
    
# Determinar los restaurantes con puntuacion mayor a 30:
    
misDocumentos = db.restaurants.find(
    {
    "grades.score": {"$gt": 30}
    },
    {
    "_id": 0,"name": 1, "grades.score": 1
    }
);

print("Nombres de restaurantes con puntuacion mayor a 30:")
for documento in misDocumentos:
    print(documento)
    
# Determinar los restaurantes con cocina italiana en el barrio de Brooklyn:
    
misDocumentos = db.restaurants.find(
    {
    "cuisine": "Italian","borough": "Brooklyn"
    },
    {
    "_id": 0,"name": 1,"cuisine": 1, "borough": 1
    }
);

print("Nombres de restaurantes con cocina italiana en el barrio de Brooklyn:")
for documento in misDocumentos:
    print(documento)
    
# Mostrar los restaurantes ordenados por barrio y codigo postal ascendente:
    
misDocumentos = db.restaurants.find(
    {},
    {
    "_id": 0,"name": 1,"borough": 1,"address.zipcode": 1
    }
).sort([("borough", 1), ("address.zipcode", 1)]);

print("Restaurantes ordenados por barrio y codigo postal ascendente: ")
for documento in misDocumentos:
    print(documento)
    
    
