
#¿Qué es GitBook?
######1-1
  *GitBook es una herramiento para crear documentación de proyectos y libros técnicos*
#¿Cómo se utiliza?
######1-2
  *Se trabaja, utilizando Markdown y Github.*

  *PASO 0: Hay que tener instalado node.js*

  *PASO 1: Crear con el comando mkdir un directorio gitbook donde trabajar:*
  ~~~
     $ mkdir /PATH/TO/gitbook
     $ cd /PATH/TO/gitbook
  ~~~
   *PASO 2: Ahora se necesita crear el package.json*
  ~~~
    $ npm init
  ~~~

  *No se necesita responder a las preguntas que el comando anterior pregunte, solo precionar enter. La información necesitar se inyectara en el archivo package.json mediante el siguiente comando:*
  ~~~
    $ npm install -g gitbook-cli --save
  ~~~
    *PASO 3: Iniciar GitBook*
  ~~~
    $ gitbook init
  ~~~

*Para crear los html*

~~~
  $ gitbook build
~~~
    **NOTA:
    GitBook permite probar el libro antes de empujarlo a la web con el comando:**
  ~~~
    $ gitbook serve
  ~~~
#¿Cómo desplegar un libro?
######1-3

  *PASO 1: Crear un nuevo fichero llamado book.js*
  ~~~
    # Node rules:
    ### Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files).grunt
    ### Dependency directory
    ### Commenting this out is preferred by some people, see
    ### https://docs.npmjs.com/misc/faq#should-i-check-my-node_modules-folder-into-git node_modules/
    ### Book build output _book/
    ### eBook build output
    *.epub
    *.mobi
    *.pdf
  ~~~
*PASO 2: Ahora se hace un push en el repositorio que has elegido*
* [Pasos]
{% youtube %}https://www.youtube.com/watch?v=kdpfRLpu0FQ {% endyoutube %}
