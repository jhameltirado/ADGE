// Crea conexión con base de datos.
db = db.getSiblingDB('local');

// De la colección people:

// Determine qué personas tendrán más de 50 años en los próximos 15 años.

db.people.aggregate(
    {
        $project: {
            name: 1,
            addedAge: {
                $add: [
                    "$age",
                    15
                ]
            }
        }
    },
    {
        $match: {
            addedAge: {$gte:50}
        }
    }
);

// Determine el estado de las personas en los próximos 15 años, es decir, si estará jubilada (65 años o más) o activa.

db.people.aggregate(
    {
        $project: {
            _id: 0,
            name: 1,
            addedAge: {
                $add: [
                    "$age",
                    15
                ]
            },
            estado:{
                $cond:[{$gte:["$AddedAge",65]}, "Jubilado", "Activo"]
            }
        }
    }
);

// Determine cuantas personas de sexo femenino tendrán menos de  45 años en los próximos 10 años.

db.people.aggregate(
    {
        $match: {
            gender: "female"
        }
    },
    {
        $project: {
            _id: 0,
            name: 1,
            age: 1,
            futureAge: {$add: ['$age', 10]}
        }
    }, 
    {
        $match: {
            futureAge: {$lt: 45}
        }
    },
    {
        $group: {
            _id: {gender: 'female'}, count: {$sum: 1}
        }
    }

);

// Determine los nombres de las personas pertenecientes a cada compañía, agrupada por sexo.

