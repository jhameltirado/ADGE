CREATE TABLE cliente 
(
    RFC_Cliente varchar(100) PRIMARY KEY NOT NULL UNIQUE, 
    Nombre varchar(40) NOT NULL, 
    Apellido1 varchar(40) NOT NULL, 
    Apellido2 varchar(40), 
    Nombre_Empresa varchar(100), 
    Direccion varchar(200), 
    Ciudad varchar(50),
    Estado varchar(50), 
    CP char(5)
);

CREATE TABLE factura
(
    Num_Factura INT(11) PRIMARY KEY UNIQUE AUTO_INCREMENT, 
    Fecha_Factura DATE, 
    RFC_Cliente varchar(100) NOT NULL, 
    FOREIGN KEY(RFC_Cliente) REFERENCES cliente(RFC_Cliente)
);

CREATE TABLE proveedor
( 
    RFC_Proveedor VARCHAR(100) PRIMARY KEY UNIQUE, 
    Nombre VARCHAR(40) NOT NULL, 
    Apellido1 VARCHAR(40) NOT NULL, 
    Apellido2 VARCHAR(40),  
    Nombre_Empresa VARCHAR(100), 
    Direccion VARCHAR(200), 
    Ciudad VARCHAR(50), 
    Estado VARCHAR(50), 
    CP CHAR(5)
);

CREATE TABLE articulo
(
    Cod_Articulo INT(11) PRIMARY KEY UNIQUE, 
    RFC_Proveedor VARCHAR (100) NOT NULL, 
    Nombre_Articulo VARCHAR(100) NOT NULL, 
    Caracteristicas VARCHAR(200), 
    Precio FLOAT NOT NULL, 
    FOREIGN KEY (RFC_Proveedor) REFERENCES proveedor(RFC_Proveedor)
);

CREATE TABLE detallefactura
(
    Num_DetalleFactura INT(11) PRIMARY KEY UNIQUE, 
    Num_Factura INT(11) NOT NULL, 
    Cod_Articulo INT(11) NOT NULL, 
    Cantidad INT  (11), 
    FOREIGN KEY(Num_Factura) REFERENCES factura(Num_Factura), 
    FOREIGN KEY(Cod_Articulo) REFERENCES articulo(Cod_Articulo)
);

