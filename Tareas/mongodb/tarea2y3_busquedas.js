// Crea conexión con base de datos.
db = db.getSiblingDB('local');

// De los archivos de datos descargados importar el archivo zip.json, y desarrollar las siguientes búsquedas:

    // Determinar cuantos documentos se tiene del estado de Nueva York.
db.zips.find(
    {city:"NEW YORK"}
    ).count()

db.zips.find(
    {state:"NY"}
    ).count()

    // Determinar las ciudades registradas para el estado de california, mostrando el nombre 
db.zips.find(
    {state:"CA"}, 
    {city:1}
    )

    // Determinar los códigos postales de la ciudad de San francisco. Mostrando las coordenadas de cada uno de ellos.
db.zips.find(
    {city:"SAN FRANCISCO"},
    {_id:1,loc:1}
    )

// De los archivos de datos descargados importar el archivo restaurants.json, y desarrollar las siguientes búsquedas:

    // Determinar los restaurantes que han tenido grado B en el barrio del Bronx.
db.restaurants.find(
    {borough:'Bronx','grades.grade':'B'},
    {name:1, _id:0}
    )

    // Determinar los restaurantes con puntuación superior a 30.
db.restaurants.find(
    {'grades.score':{$gt:30}},
    {name:1,'grades.score':1,_id:0}
    )

    // Determinar los restaurantes con cocina italiana en el barrio Brooklyn.

    // Muestre los restaurantes ordenados por barrio y código postal ascendente.

    

