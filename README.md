# Prueba 29 oct

Luego de haber reconstruido los modulos de node usar: **npm run start** para poner a funcionar el servidor.

## Rutas para materias

POST: localhost:8080/api/materias
  {
      "nombre": "Fundamentos de Programacion",
      "semestre": 2,
      "carrera": "Ingenieria de Sistemas"
  }
GET: localhost:8080/api/materias
PUT: localhost:8080/api/materias/(MongoID)
DELETE: localhost:8080/api/materias/(MongoID)

## Rutas para usuarios

POST: localhost:8080/api/usuarios
{
    "nombre": "Sebastian",
    "apellido": "Vivas",
    "correo": "sebastian@test.com",
    "sexo": "masculino",
    "materias": [  
        (agregar MongoID como string separadas por comas)
    ]
}
GET: localhost:8080/api/usuarios/(correo)
PUT: localhost:8080/api/usuarios/(MongoID)
DELETE: localhost:8080/api/usuarios/(MongoID)
