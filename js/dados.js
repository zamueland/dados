function dados(cantdados) {
	var arrayGrafica = [0,0,0,0,0,0];
	for (var i = 1; i <= cantdados; i++) {
		var numberRandom = 0;
		numberRandom = random();
		arrayGrafica[numberRandom-1] = arrayGrafica[numberRandom-1] + 1;
	}
	console.log(arrayGrafica);
	return arrayGrafica;
}

	function random(){
		var aleatorio = Math.floor((Math.random() * (7-1)+ 1));
		console.log(aleatorio);
		return aleatorio;
	} 

	$(document).ready(function(){
		$('#calcular').click(function(){
			validaciones();
			$("#table").removeAttr("hidden");
			var canvas = document.getElementById('chart').getContext('2d');		
			var cantdados = document.getElementById('cantidad').value;
			var arregloDatos = dados(cantdados);		
			var chart = document.getElementById('chart');

			document.getElementById("ficara1").innerHTML = arregloDatos[0];
			document.getElementById("ficara2").innerHTML = arregloDatos[1];
			document.getElementById("ficara3").innerHTML = arregloDatos[2];
			document.getElementById("ficara4").innerHTML = arregloDatos[3];
			document.getElementById("ficara5").innerHTML = arregloDatos[4];
			document.getElementById("ficara6").innerHTML = arregloDatos[5];

			var cara1 = (arregloDatos[0]/cantdados) *100;
			var cara1F = cara1.toFixed(4); 
			var cara2 = (arregloDatos[1]/cantdados) *100;
			var cara2F = cara2.toFixed(4); 
			var cara3 = (arregloDatos[2]/cantdados) *100;
			var cara3F = cara3.toFixed(4); 
			var cara4 = (arregloDatos[3]/cantdados) *100;
			var cara4F = cara4.toFixed(4);
			var cara5 = (arregloDatos[4]/cantdados) *100;
			var cara5F = cara5.toFixed(4);  
			var cara6 = (arregloDatos[5]/cantdados) *100;
			var cara6F = cara6.toFixed(4); 

			document.getElementById("%cara1").innerHTML = cara1F + '%';
			document.getElementById("%cara2").innerHTML = cara2F + '%';
			document.getElementById("%cara3").innerHTML = cara3F + '%';
			document.getElementById("%cara4").innerHTML = cara4F + '%';
			document.getElementById("%cara5").innerHTML = cara5F + '%';
			document.getElementById("%cara6").innerHTML = cara6F + '%';

			var chartInstance = new Chart(chart, {
				type : "bar", 
				data: {
					labels: ["1", "2", "3", "4", "5" , "6"],
					datasets : [{
						label: 'Frecuencia Absoluta',
						labelColor: [
									'rgb(255,255,255)'
						],
						data: arregloDatos,
						backgroundColor: [
							                'rgb(244, 67, 54)',
							                'rgb(54, 162, 235)',
							                'rgb(255, 206, 86)',
							                'rgb(75, 192, 192)',
							                'rgb(153, 102, 255)',
							                'rgb(255, 159, 64)'
            			],
					}]
				},			
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
								
							}
						}]
					}
				}
			});	
		});
	});

	function validaciones(){
		var cantdados = document.getElementById('cantidad').value;
		if(cantdados.length == 0){ 
			alert("Ingresa cantidad de veces a lanzar el Dado");
			cantdados.style.border = "2px solid red";
			return false; 
		}else if(cantdados < 1){
			alert("Ingresa Números Positivos");
			cantdados.style.border = "2px solid red";
			return false;
		}
	}
	

	

