# Coderhouse

El proyecto trata sobre un controlador de calificaciones, la idea al final del proyecto es poder acumular todas las notas de un curso detallando nombre y apellido de cada alumno y su condición definida entre aprobado y desaprobado dada por el promedio y emitir un informe por pantalla del estado al final de la cursada de todos los alumnos.



Paso #1 : Ingresar el nombre del alumno.  
Paso #2 : Ingresar el apellido del alumno.  
Paso #3 : Ingresar nota del primer parcial.  
Paso #4 : Ingresar nota del segundo parcial.  


El codigo calcula el promedio según las notas (valores numéricos) se le ingresen y lo establecido por condición desde el código.


Cuando terminemos de ingresar todos los datos se visualizará por pantalla un encabezado con el texto "Nota del alumno" y como cuerpo del mensaje lo siguiente:

El promedio de (nombre ingresado) + (apellido ingresado) es + (promedio calculado) + (aprobado/desaprobado)

Cuándo están aprobados?

-Si promedio >= 6.5

Cuándo están desaprobados?

-Si promedio <= 6.5

###NUEVO###
Debajo, podremos ver un boton que nos llevará a una pequeña aplicacion de control de los trabajos practicos del alumno

Cómo funciona?
En el input 'Nuevo TP" escribimos el nombre del trabajo práctico y podemos agregarlo a la lista presionando enter o haciendo click en el boton "+" y se ira formando una lista. Adicionalmente, veremos el boton ordenar; este boton cumple la función de ordenar las tareas pendientes el listado en la parte superior dejando las finalizadas en la parte inferios. 

Cómo marco un tp como finalizado?

-Haciendo click sobre la tarea, la misma pasara a tener el texto tachado, lo cual indica que la marcamos como finalizada.



---Deprecado:

Mientras se realizan los pasos enunciados veremos un encabezado en pantalla con el texto "Soy un proyecto de coder"

Debajo nos encontramos con un campo input donde se simula el ingreso de un mail para notificar al alumno de una beca, al lado un bottom de enviar al alumno para notificarlo que al presionarlo cambia el placeholder del mismo.
En el medio de la pantalla hay una card con el texto "Hurry up" que al pasar el cursor por encima se da vuelta y al dorso cambia su contenido por un mensaje con el titlo " Felicidades" y como texto "El alumno tiene una beca disponible, para notificarlo haz click sobre el botón "Enviar al alumno" y luego finalizar aquí debajo."
Dentro de este ultimo paso de la tarjeta al presionar finalizar el localhost nos dirá "Ha finalizado la prueba del proyecto".
