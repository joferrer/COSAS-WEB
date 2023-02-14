 
 function consultarEmpleado(){

    let url = "https://programacion-web---i-sem-2019.gitlab.io/persistencia/json_web/json/empresa.json";

    fetch(url).then(response =>response.json()).then(response=>{


        let url2=new URLSearchParams(location.search);
		//Obtener los values
		let cod=url2.get('codigo');
        let datos = document.getElementsByClassName('info');
        let tabla = document.getElementById('ventas');
        let cn="";
        for(let i =0;i<response.sucursales.length;i++){
            console.log("i: "+i+" "+response.sucursales.length);
            for(let j=0;j< response.sucursales[i].empleados.length;j++){

                if(response.sucursales[i].empleados[j].codigo_empleado == cod){
                    cn=response.sucursales[i].empleados[j].nombre;
                    datos[0].innerHTML=cn;
                    datos[1].innerHTML="Cod: "+response.sucursales[i].empleados[j].codigo_empleado;
                    datos[2].innerHTML="Sucursal: "+response.sucursales[i].nombre_sucursal;
                    document.getElementById('infoEmpleado').id="infoVisible";

                    for(let k=0;k<response.sucursales[i].empleados[j].ventas.length;k++){
                        let idV= response.sucursales[i].empleados[j].ventas[k].id_mes;
                        let valorV = response.sucursales[i].empleados[j].ventas[k].valor_venta;
                        tabla.innerHTML+="<tr><td>"+idV+"</td>"+"<td>"+valorV+"</td>"+"</tr>";
                        
                    }
                   
                }
            }
            

        }
        drawChart();
    }
    );
}
 
 
 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        let datos = document.getElementsByClassName('info')[3].tableToJSON();
        let d = [];
  

        
        data.addColumn('string', 'Mes');
        data.addColumn('number', 'Valor');
        data.addRows(datos);
        

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

        
