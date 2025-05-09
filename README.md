# G<font color="D4AF37">O</font>LD<font color="D4AF37">2</font>WIN

## Propuesta de proyecto
Nuestra propuesta consiste en hacer una casa de apuestas con varios secciones sobre las que realizar apuestas como deportes, pockemon TFG, juegos de mesa, eurovision , esports, o cualquier tipo de evento. Dentro de cada seccion(deporte concreto) se tendrá una plantilla con la que poder poner cuotas a diferentes opciones de apuesta. Para el futbol por ejemplo la plantilla incluiría quien se lleva la victoria, numero de goles, etc.
Apartir de una sección se pueden crear eventos asignando cuotas a los diferentes campos posibles a los que se puede apostar. Este proceso de asignacion de cuotas para un evento debe ser hecho por un administrador y los usuarios simplemente verán una serie de tablas donde las colunnas son por ejemplo: mas de 3 goles y las filas serían diferentes jugadores. Estos eventos también tendrán asociados una serie de etiquetas (como en stack overflow) asignadas por administradores y que pretenden facilitar la busqueda de partidos através de un campo buscador. 
A esto hay que sumarle un historial donde poder ver las apuestas hechas y sus resultados, una cartera en la que poder ingresar y retirar dinero además de ver un historial de las transacciones realizadas. También se implementará un sistema de chat de texto que estará ligado a cada evento siendo posible para cualquier usuario unirse al chat y conversar sobre el evento. Esto último hace necesario un sistema de reportes donde los usuarios puedan reportar el mensaje para que un administrador lo revise para estimar si es necesario una expulsión temporal, permanente o no hay que hacer nada. 
Las cuentas estarán divididas en 2 tipos Administrador y usuario con los siguientes privilegios:
1. Usuario: Este tipo de cuenta solo puede usar su cartera, crear apuestas en base a eventos ya existentes, unirse a chats, modificar su perfil y acceder a su historico de apuestas.
2. Administrador: Este tipo de cuenta tiene todos los privilegios que tiene una cuenta de tipo Usuario y además puede acceder a la zona de administración donde puede acceder a la lista de usuarios y obtener informacion sobre cada uno. Esto incluye su lista de mensajes, historicos de transacciones y apuestas, lista de reportes hechos y recibidos. También tiene el privilegio de poder crear una nueva seccion (o tipo de evento que es lo mismo) añadiendo el nombre la imagen y creando la plantilla. Puede agrupar estas secciones en grupos para que los usuarios encuentren mas rapido la sección que buscan y también puede crear un nuevo evento de una sección especifica. Esto último lo haría poniendo el titulo la fecha y especificando cuotas y a que campos se puede apostar. Por supuesto tiene que poder revisar los diferentes reportes y poder poner expulsiones temporales o permanentes a cualquier usuario.  

#### Dudas de la propuesta
Aún está por decidir si incluir entre los roles de administrador el poder cancelar un evento (ya que puede darse el caso). Sinembargo pensamos que no se deberían poder modificar los eventos una vez creados ya que implicaría cambiarlas cuotas y para las apuestas ya hechas es un lío saber quien ha apostado cuando (o una estafa según como se haga). Se puede hacer que solo se puedan cambiar datos como el nombre / la fecha y las etiquetas pero según nuestra idea actual en ningún caso las cuotas o los campos apostables. 
Por otro lado una vez la apuesta hecha no sabemos si incluir una cancelación también. Para la modificación de una apuesta basados en otras paginas al ser como una compra no es común que se pueda hacer. Simplemente se hace una nueva apuesta. Aunque podríamos incluirla (siempre y cuando el partido no haya empezado).

## Vistas
1. Todas las secciones: Es la recepción de la página y donde se pueden ver todos los eventos apostables. En cada uno se ve el titulo, la fecha, imagen de a sección, las etiquetas y un botón para unirse al chat de texto. Pulsando sobre los eventos el usuario es redirigido a la pagina de crear apuesta del evento donde puede empezar a apostar. Esta vista no cambia según el tipo de usuario y se puede acceder aún sin estar logueado pero al intentar unirte al chat o crear una apuesta el usuario será redirigido al login. Además hay una barra de busqueda que permite buscar eventos concretos de manera más rapida para el usuario basandose en los titulos de los eventos y las etiquetas de los eventos. A la hizquierda también estan las diferentes secciones agrupadas de manera que se puedan filtrar los eventos. Por ejemplo ver solo los eventos de footbol, de pockemon o  de concursos de baile. 
2. Crear apuesta: esta pagina podría considerarse la mas importante en una pagina de apuestas ya que permite apostar a un evento. la vista es una serie de tablas donde las cabeceras de las columnas indican a que se está apostando (victoria, +15 goles, expulsion) y las filas indican equipos, jugadores o diferentes opciones posibles para cada apuesta. En las celdas de las tablas se indican las cuotas y se pueden ir seleccionando las celdas para indicar a que quieres apostar. Al principio de la pagina se encuentra el tablón que recopila las casillas seleccionadas y donde hay que introducir la cantidad a apostar. (aclaración: según las opciones que selecciones se va multiplicando la cuota y solo ganas la apuesta si todos los campos que seleccionas acaban sucediendo)
3. Cartera: Esta vista sirve para gestionar el dinero de la cuenta. Las dos opciones son ingresar o retirar y para poder hacer cualquiera de las 2 hay que seleccionar un metodo de pago y después pulsar la acción que quieres hacer. Posteriormente se añadirá el histórico de transacciones.
4. Historial de apuestas: En esta vista deben aparecer las diferentes apuestas hechas por el usuario. Cuando se selecciona una se tiene que desplegar mostrando cuanto dinero se gastó en la apuesta, cuanto se ganó e indicar que campos de la apuesta se ganaron y cuales se perdieron. Dentro de esta vista se permite mediante un menú simple filtrar las apuestas que aún no han sido determinadas, las que si lo han sido o una mezcla de ambas. 
5. Administrador: Esta vista aún no la hemos hecho ya que el administrador tiene un montón de opciones que aun no tenemos muy claro cuales va a tener y cuales no además que la mayoría de ellas pueden ser reutilizadas de otras pantallas mas secundarias. (La hacemos esta semana)
6. Determinar Apuesta: A esta vista se puede acceder de momento de manera provisional através de la ventana de administración y es la que permite a un administrador indicar que resultado se ha dado en el evento. Para ello la disposicion de tablas es similar a la vista de crear apuesta. Por defecto todos los campos se establecen a que no han sucedido y el administrador tiene que ir seleccionado los campos que si que han sucedido y que por tanto la gente que ha apostado a ellos tiene que cobrar.

## Tareas pendientes
- Reestructurar menu para movil cuando no esta logueado
- Mantener el modo oscuro de una pagina a otra con cookies
- Menus de secciones de index y admin/secciones funcional
- Ver mas en index, crear apuesta, historico
- Cambios pedidos en crear apuesta
- Hacer funcional crerar apuesta y crear formula
- Reestructuracion de controladores
- Adaptar historico para moviles/modo claro.
- Th para admin/ usuario, admin/reportes
- Crear la pagina de ver usuarios de admin
- Crear la pagina de ver reportes de admin
- Hacer funcional crear secciones (a lo mejor rework estetico)
- Añadir con th y funcional crear evento y vista de eventos para admin
- Rework estetico de login/registe 
- Hacer register funcional
- Rework estetico de usuario
- Segunda iteración en cartera (no siempre iniciar sesion para pagar) (cambios BD)
- Cambiar README según se adapten cosas
- Segunda iteración a la BD para arreglar errores y cambiar el diagrama
- Crear historico de ingresos/retiradas (requiere cambios en la BD)


## recursos utilizados
- https://www.web-leb.com/es/code/609 (Barra busqueda todas las secciones. Se ha modificado un poco)
- Chat gpt: Sobretodo para entender como funciona bootstrap, html y css. Para detectar donde están los erres mas rapido y para fragmentos de codigo basicos.
- https://icons.getbootstrap.com/ (diferentes iconos usados en toda la web
)
- https://getbootstrap.com/docs/5.3/components/modal/ :Para pulsar en crear mi propia apuesta y apostar. 
- https://getbootstrap.com/docs/5.3/components/collapse/ : para los menús desplegables de la navBar
- https://getbootstrap.com/docs/5.3/components/navbar/#offcanvas para el menú al contraerse la pagina
- https://codepen.io/MarkBoots/pen/RwLPXgJ : Para los mensajes de los chats