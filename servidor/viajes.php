<?php

	$server = "localhost";
		$user = "sibw";
		$password = "_aprobandoSIBWconUn10";
		$db = "viajes";
		
		$conexion = new mysqli($server, $user, $password, $db);
		
		if(! $conexion)
			die("Conexión fallida: ");
			
	$sql = "select * from Viajes;";
	
	$consulta = $conexion -> query($sql);
	$resultado = [];
		
	if($consulta -> num_rows > 0)
			while($row = $consulta -> fetch_assoc())
				array_push($resultado, [ "ciudad" => $row["ciudad"], "imagenPrincipal" => $row["imagenPrincipal"] ]);

	header('Access-Control-Allow-Origin: *');
	
	echo json_encode(["viajes" => $resultado]);
	
	mysqli_close($conexion);
	
?>
