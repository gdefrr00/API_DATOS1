# API Datos

Este proyecto es una API REST para la gestión de sensores y lecturas de datos. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre sensores y lecturas almacenadas en una base de datos MongoDB.

## Características

- **Gestión de Sensores**: Permite crear, obtener, actualizar y eliminar sensores.
- **Gestión de Lecturas**: Permite crear, obtener y eliminar lecturas de sensores.
- **Rango de Fechas**: Permite obtener lecturas de un sensor en un rango de fechas específico.
- **Importación y Exportación de Datos**: Scripts para importar y exportar datos de la base de datos MongoDB.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd API_DATOS1
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Configuración

Configura la conexión a la base de datos MongoDB en el archivo [`config/db.js`](config/db.js).

## Uso

1. Inicia el servidor:
    ```sh
    node server.js
    ```
2. La API estará disponible en `http://localhost:3000`.

## Endpoints

### Sensores

- `GET /sensors`: Obtener todos los sensores.
- `POST /sensors`: Crear un nuevo sensor.
- `GET /sensors/:id`: Obtener un sensor por ID.
- `PUT /sensors/:id`: Actualizar un sensor por ID.
- `DELETE /sensors/:id`: Eliminar un sensor por ID.

### Lecturas

- `GET /readings/:sensorId`: Obtener todas las lecturas de un sensor.
- `POST /readings`: Crear una nueva lectura.
- `DELETE /readings/:sensorId`: Eliminar todas las lecturas de un sensor.
- `GET /readings/time/:sensorId`: Obtener lecturas de un sensor en un rango de fechas.

## Importación y Exportación de Datos

- **Exportar Datos**: Ejecuta el script [`resources/export_data.sh`](resources/export_data.sh) para exportar datos de la base de datos MongoDB.
- **Importar Datos**: Ejecuta el script [`resources/import_data.sh`](resources/import_data.sh) para importar datos a la base de datos MongoDB.

## Colección de Postman

Puedes encontrar una colección de Postman para probar la API en [`resources/API Datos.postman_collection.json`](resources/API Datos.postman_collection.json).

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.