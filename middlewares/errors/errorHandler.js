 // creando middleware de tipo error
function logErros(err, req, res, next){
    console.log("LogErrors")
    console.error(err);
    next(err);
}

// middleware para detectar un error pero va a crear un formato para devolverselo a nuestro cliente
function errorHandler(err, req, res, next){
    console.log("errorHandler")
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
}


// esta función se crea para trabajar con el boom, puesto que la librería boom tiene un formato especial en cual maneja los errores

function boomErrorHandler(err, req, res, next){
    // para saber si el error es generado automáticamente por la libería boom, al error automáticamente se le agrega una propiedad llamda isBoom
    if (err.isBoom){
        // si entra en este condicional, obviamente el erro fue disparado con boom. Por lo que el error tendría un atributo llamado output en el cuál estarían todos los prints del error
        const {output} = err
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}


module.exports = { logErros, errorHandler, boomErrorHandler}; 