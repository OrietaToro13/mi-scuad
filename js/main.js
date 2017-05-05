function scuad(nombre, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	}

	var rangi =new rangi('Rangi', 'Becerra', 32, 'Viajar');
	var genesis = new genesis('Genesis', 'Narvaez', 27, 'Pasear en Bicicleta');
	var camila = new camila('Camila', 'Gonzalez', 00, 'Muy Proactiva');
	var laura = new laura('Laura', 'Pealez', 00, 'Cinefila');
	var caterina = new caterina('Caterina', 'DaSilva', 26, 'Juegos Online');
	var constanza = new constanza('Constanza', 'Pecori', 26, 'tejer, comer y dormir');
	var rosita = new rosita('Rosita', 'Diaz', 27, 'Pasear en Bicicleta');
	var orieta = new orieta('Orieta', 'Toro', 27, 'leer y dormir');

	var verRangi = document.getElementById("rangi");
	var verGenesis = document.getElementById("genesis");
	var verCamila = document.getElementById("camila");
	var verLaura = document.getElementById("laura");
	var verCaterina = document.getElementById("caterina");
	var verConstanza = document.getElementById("constanza");
	var verRosita = document.getElementById("rosita");
	var verOrieta = document.getElementById("orieta");

verRangi.innerHTML = "<strong>Nombre: </strong>" + rangi.nombre + " " + rangi.apellido +
"<br> <strong>Edad: </strong>" + rangi.edad +"<br> <strong>Hobbies: </strong> <li>" + rangi.hobbies + "</li>";

verGenesis.innerHTML = "<strong>Nombre: </strong>" + genesis.nombre + " " + genesis.apellido +
"<br> <strong>Edad: </strong>" + genesis.edad +"<br> <strong>Hobbies: </strong> <li>" + genesis.hobbies + "</li>";

verCamila.innerHTML = "<strong>Nombre: </strong>" + camila.nombre + " " + camila.apellido +
"<br> <strong>Edad: </strong>" + camila.edad +"<br> <strong>Hobbies: </strong> <li>" + camila.hobbies + "</li>";

verLaura.innerHTML = "<strong>Nombre: </strong>" + laura.nombre + " " + laura.apellido +
"<br> <strong>Edad: </strong>" + laura.edad +"<br> <strong>Hobbies: </strong> <li>" + laura.hobbies + "</li>";

verCaterina.innerHTML = "<strong>Nombre: </strong>" + caterina.nombre + " " + caterina.apellido +
"<br> <strong>Edad: </strong>" + caterina.edad +"<br> <strong>Hobbies: </strong> <li>" + caterina.hobbies + "</li>";

verConstanza.innerHTML = "<strong>Nombre: </strong>" + constanza.nombre + " " + constanza.apellido +
"<br> <strong>Edad: </strong>" + constanza.edad +"<br> <strong>Hobbies: </strong> <li>" + constanza.hobbies + "</li>";

verRosita.innerHTML = "<strong>Nombre: </strong>" + rosita.nombre + " " + rosita.apellido +
"<br> <strong>Edad: </strong>" + rosita.edad +"<br> <strong>Hobbies: </strong> <li>" + rosita.hobbies + "</li>";

verOrieta.innerHTML = "<strong>Nombre: </strong>" + orieta.nombre + " " + orieta.apellido +
"<br> <strong>Edad: </strong>" + orieta.edad +"<br> <strong>Hobbies: </strong> <li>" + orieta.hobbies + "</li>";



