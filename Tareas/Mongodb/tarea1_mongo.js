// Crea conexión con base de datos.
db = db.getSiblingDB('local');

// A la colección de municipios de Sinaloa creada, agregar un arreglo que contenga el nombre de 3 sindicaturas al municipio de Culiacán. 
db.sinaloadb.update(
    { nombre: 'Culiacan' },
    {
        $set: { sindicaturas : ['Aguaruto','Culiacancito','Emiliano Zapata'] }
    }
);

// Incrementa en 1000 habitantes a todos municipios (buscar operador).
db.sinaloadb.update(
    { },
    { 
        $inc: { poblacion: 1000 } 
    },
    { multi: true }
);

// Agregar un campo presidente a todos los municipios.
db.sinaloadb.update(
    { },
    {
        $set: { presidente : "" }
    },
    { multi: true }
);

// Establecer el nombre del presidente a Culiacán y Mazatlán.
db.sinaloadb.update(
    { nombre: 'Culiacan' },
    {
        $set: { presidente : 'Juan de Dios Gámez Mendívil' }
    }
);

db.sinaloadb.update(
    { nombre: 'Mazatlán' },
    {
        $set: { presidente : 'José Ángel Pescador Osuna' }
    }
);

// Cambiar el nombre de campo superficie por área.
db.sinaloadb.update(
    { },
    {
        $rename: { 'área' : área }
    },
    { multi: true }
);

