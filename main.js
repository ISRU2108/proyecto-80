nombre_alumno_array=[];

function submit()
{
    var nombre_1 = document.getElementById("nombre_alumno_1").value;
    var nombre_2 = document.getElementById("nombre_alumno_2").value;
    var nombre_3 = document.getElementById("nombre_alumno_3").value;
    var nombre_4 = document.getElementById("nombre_alumno_4").value;

    nombre_alumno_array.push(nombre_1);
    nombre_alumno_array.push(nombre_2);
    nombre_alumno_array.push(nombre_3);
    nombre_alumno_array.push(nombre_4);

    console.log(nombre_alumno_array);

    document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;
    document.getElementById("boton_enviar").style.display = "none";
    document.getElementById("boton_ordenar").style.display = "inline-block";
}
function sorting()
{
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("ver_nombre").innerHTML = nombre_alumno_array
}
function buscar(){
    var s= document.getElementById("s1").value;
    var found=0;
    var j:
    for( j=0; j<names_of_people.length; j++)
        {
            if(s==names_of_people[j]){
                found=found+1;
            }
        }
        document.getElementById("p2").innerHTML="name found "+found+"time/s",
        console.log("found name "+found+ time/s);
}