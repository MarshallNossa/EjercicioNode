const bodegaFormulario = () => { 
    return `
    <h1>Crear Bodega</h1>
        <form action="/prueba/guardarBodega" method="POST">

        <label for="nombre">Nombre:</label> <br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="id_responsable">ID responsable:</label> <br>
        <input type="number" id="id_responsable" name="id_responsable" required><br><br>

        <label for="estado">Estado:</label> <br>
        <input type="number" id="estado" name="estado" required><br><br>

        <label for="created_by">Creado por (id):</label> <br>
        <input type="number" id="created_by" name="created_by" required><br><br>

        <label for="updated_by">Actualizado por (id):</label> <br>
        <input type="text" id="updated_by" name="updated_by" required><br><br>

        <input type="submit" value="Guardar">
        </form>
    `;
};

export default bodegaFormulario;