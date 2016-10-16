#¿Qué es GH-Pages?
######2-1
    *GH-pages es un servicio de alojamiento web estático de Github que nos permite desplegar nuestro sitio web.*

#¿Cómo se utiliza?
######2-2
    *Se puede almacenar cualquier código que se desee en un repositorio de Github, pero para usar la característica páginas
    de Github con  pleno efecto, el código debe estar estructurado como un sitio web típico, por ejemplo que el punto de entrada
    primario sea un archivo     HTML llamado index.html.*

  **SEGUIREMOS LOS SIGUIENTES PASOS :**

  *1. Crear un nuevo repositorio para colocar los archivos en el. Has clic en el signo más (+) en la parte superior derecha   de la         página de inicio de GitHub, luego escoge Nuevo Repositorio*
  *2. En esta página, en la caja Nombre del Repositorio, digita el nombre para tu repositorio de código, por ejemplo my-repository.
  3. Tambien llena una descripción para decir lo que tu repositorio va a contener.
  4. Has Clic en Crear repositorio.*


  **SUBIENDO LOS ARCHIVOS A GITHUB :**

  *1. En la página actual, nos interesa la sección …or push an existing repository from the command line. Se deberían ver dos lineas de código listado en esta sección. Copia la totalidad de la primera línea, pegala en la linea de comandos, presiona la tecla Enter.*
~~~
  git remote add origin https://github.com/chrisdavidmills/my-repository.git
~~~

  *2.A continuación, digitamos los siguientes dos comandos, presionando Enter despues de cada uno. Estos preparan el codigo para subirlo a GitHub, and ask Git to manage these files.*
~~~
  git add --all
  git commit -m 'adding my files to my repository'
~~~

  *3. Por último, subimos el código hasta GitHub by going to the GitHub web page you're on and entering into the terminal the second of the two commands we saw the …or push an existing repository from the command line section:*
~~~
  git push -u origin master
~~~
    *4. Ahora creamos la rama gh-pages de tu repositorio; actualiza la página actual y verá una página del repositorio algo así como la de abajo. Presionamos el boton que dice Branch: master, digita gh-pages en el campo de texto, luego presiona el boton azul que dice Create branch: gh-pages. Esto crea una rama de código especial llamada gh-pages que es publicada en una ubicación especial. La URL toma la forma username.github.io/my-repository-name, asi en mi caso de ejemplo,* [la URL debería ser](https://chrisdavidmills.github.io/my-repository). *La página mostrada es la página index.html.

  5. Navega tu dirección web de GitHub pages en un nuevo navegador, y deberia verse tu sitio en linea.*

#Como utilizar el módulo gh-pages para automatizar el despliegue
######2-3
    *Creación de páginas con el generador automático
    Puede utilizar Generador automático de página GitHub para crear rápidamente un único sitio web de página para un proyecto, usuario u     organización.*

    *El generador automático de página está diseñada para crear sitios web de una sola página. Si usted está interesado en la construcción de un sitio web de varias páginas, se recomienda utilizar Jekyll . Para agregar varias páginas a su sitio automatizado generador de la página como una solución, puede intentar copiar el index.htmlarchivo en la raíz de su repositorio y editarlo como plantilla para otras páginas web. Esta solución requiere cierta familiaridad con el lenguaje HTML.*
