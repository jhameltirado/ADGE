#include <stdio.h>
#include <mysql.h>

// //Inicializando variable de conexión

int main(int argc, char* argv[])
{
    MYSQL *conexion;  		  // Conexión a servidor
    MYSQL_RES *resultados; 	  // Conjunto de resultados
    MYSQL_ROW registro;  	  // Registro de la tabla
    char *servidor = "localhost"; 	  // Nombre de Servidor
    char *usuario = "jhamel"; 	  //Usuario de la base de datos
    char *contrasena = "adge2023";	  //Contraseña del usuario
    int  puerto = 3306;		  //Contraseña del usuario
    char *basedatos = "db1";	 // Nombre de la base de datos

    conexion = mysql_init(NULL);

    if(!mysql_real_connect(conexion, servidor, usuario, contrasena, basedatos, puerto, NULL, 0))
    {
        printf("Error: %s\n", mysql_error(conexion));
        exit(1);
    }

    // Establece la consulta a realizar
    char sqlForm[250]= "SELECT T1.nombre, T1.email, T1.fecha, date(T2.fechamov), T2.tipo, cantidad FROM cuentas AS T1 INNER JOIN movimientos AS T2 ON T2.idcuenta = T1.idcuenta WHERE T1.idcuenta = %s and T2.fechamov BETWEEN '%s' AND '%s'";
    char sql[250];

    // Establece los parámetros de la consulta a realizar
    sprintf(sql, sqlForm, argv[1], argv[2], argv[3]);

    // Envia consulta SQL para la tabla Cuenta
    if (mysql_query(conexion, sql))
    {
        printf("Error: %s\n", mysql_error(conexion));
        exit(1);
    }

    // Recupera el conjunto de resultados

    resultados = mysql_store_result(conexion);
    if(resultados == NULL)
    {
        printf("Error en la recuperación de resultados\n");
        exit(1);
    }

    if((int)mysql_num_rows(resultados) == 0)
    {
        printf("No existe el cliente\n");
        exit(1);
	}

    // Recupera el registro del cliente
    printf("%8s %-30s %-35s %40s %-45s %-50s\n", "Nombre", "Correo", "Fecha", "Fecha.Op", "Tipo", "Cantidad");
    while((registro = mysql_fetch_row(resultados)) !=   NULL)
    {
        printf("%8s %-30s %-35s %40s %-45s %-50s\n", registro[0], registro[1], registro[2], registro[3], registro[4], registro[5]);
    }

    // Liberacion de resultados
    mysql_free_result(resultados);

    // Cierra conexión
    mysql_close(conexion);

return 0;
}
