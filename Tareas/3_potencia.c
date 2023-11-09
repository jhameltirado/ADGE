#include <stdio.h>
#include <mysql.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

_Bool potencia_init(UDF_INIT *initid, UDF_ARGS *args, char *message) 
{
    if (args->arg_count != 2 || args->arg_type[0] != INT_RESULT) {
         strcpy (message, "indique dos argumentos de tipo entero");
         return 1;
    }

 return 0;
}

int potencia(UDF_INIT *initid,UDF_ARGS *args, char *is_null, char *error) 
{
    int primero =  *((int *)args->args[0]);
    int segundo  = *((int *)args->args[1]);

    int pot = pow(primero,segundo);

    return pot;
}

void potencia_deinit(UDF_INIT *initid){


}

