export interface GlossaryGroup {
  letter: string;
  items: { term: string; def: string }[];
}

export const glossaryEs: GlossaryGroup[] = [
  {
    letter: "A",
    items: [
      { term: "Abstract class", def: "Clase que no puede ser instanciada directamente. Sirve como base para otras clases mediante herencia. Puede contener métodos abstractos (sin implementación) y métodos concretos. Se declara con la palabra clave `abstract`." },
      { term: "Abstracción", def: "Principio de POO que consiste en ocultar los detalles de implementación y mostrar solo la funcionalidad esencial al usuario. Se logra mediante clases abstractas e interfaces." },
      { term: "API (Application Programming Interface)", def: "Conjunto de clases, interfaces y métodos que Java proporciona listos para usar. La API estándar de Java incluye colecciones, I/O, networking, fechas, etc." },
      { term: "ArrayList", def: "Colección dinámica que implementa la interfaz List. A diferencia de los arrays tradicionales, puede crecer y reducirse automáticamente. Ideal para cuando no se sabe el tamaño exacto de antemano." },
      { term: "Array", def: "Estructura de datos que almacena elementos del mismo tipo en posiciones contiguas de memoria. En Java, los arrays tienen tamaño fijo y pueden ser de tipos primitivos u objetos." },
      { term: "Anotación (@Annotation)", def: "Metadatos que se agregan al código fuente para proporcionar información al compilador o en tiempo de ejecución. Ejemplos: @Override, @Deprecated, @FunctionalInterface." },
    ]
  },
  {
    letter: "B",
    items: [
      { term: "Break", def: "Instrucción que termina prematuramente un bucle (for, while, do-while) o un switch. Cuando se ejecuta, el control salta a la siguiente instrucción después del bucle o switch." },
      { term: "Bytecode", def: "Código intermedio generado por el compilador de Java (javac) a partir del código fuente. La JVM ejecuta el bytecode, lo que permite la portabilidad del lenguaje." },
    ]
  },
  {
    letter: "C",
    items: [
      { term: "Clase", def: "Plantilla o modelo que define las propiedades (atributos) y comportamientos (métodos) de los objetos. Es el bloque fundamental de la programación orientada a objetos en Java." },
      { term: "Constructor", def: "Método especial que se ejecuta al crear una instancia de una clase. Tiene el mismo nombre que la clase y no tiene tipo de retorno. Puede haber múltiples constructores (sobrecarga)." },
      { term: "Continue", def: "Instrucción que salta a la siguiente iteración de un bucle, omitiendo el código restante en la iteración actual." },
      { term: "Checked Exception", def: "Excepción que el compilador obliga a manejar mediante try-catch o declarar con throws. Ejemplos: IOException, SQLException." },
    ]
  },
  {
    letter: "D",
    items: [
      { term: "Do-While", def: "Estructura de control que ejecuta un bloque de código al menos una vez y luego repite mientras se cumpla una condición. La condición se evalúa al final de cada iteración." },
    ]
  },
  {
    letter: "E",
    items: [
      { term: "Encapsulamiento", def: "Principio de POO que oculta los datos internos de un objeto y solo expone métodos controlados para accederlos o modificarlos. En Java se implementa con los modificadores private, public y protected." },
      { term: "Enum", def: "Tipo especial que define un conjunto fijo de constantes. Ejemplo: enum Dia { LUNES, MARTES, MIERCOLES }. Pueden tener campos, métodos y constructores." },
      { term: "Excepción", def: "Evento anómalo que ocurre durante la ejecución de un programa y que interrumpe el flujo normal de instrucciones. Java proporciona un mecanismo robusto para manejarlas." },
      { term: "Expresión Regular (Regex)", def: "Patrón de búsqueda y manipulación de cadenas de texto. En Java se usa con las clases Pattern y Matcher del paquete java.util.regex." },
    ]
  },
  {
    letter: "F",
    items: [
      { term: "Final", def: "Palabra clave que puede aplicarse a variables (constante), métodos (no puede sobreescribirse) o clases (no puede heredarse)." },
      { term: "Finally", def: "Bloque opcional en try-catch que se ejecuta siempre, haya o no excepción. Se usa típicamente para liberar recursos como cerrar archivos o conexiones." },
      { term: "For", def: "Estructura de control que repite un bloque de código un número determinado de veces. Tiene tres partes: inicialización, condición y actualización." },
      { term: "For-Each", def: "Variante del bucle for que recorre todos los elementos de una colección o array sin necesidad de un índice explícito." },
    ]
  },
  {
    letter: "G",
    items: [
      { term: "Garbage Collector (GC)", def: "Mecanismo automático de Java que libera memoria eliminando objetos que ya no tienen referencias activas. El programador no necesita gestionar la memoria manualmente." },
      { term: "Genéricos", def: "Mecanismo que permite escribir clases, interfaces y métodos que operan con tipos parametrizados. Ejemplo: ArrayList<String>. Proporcionan seguridad de tipos en tiempo de compilación." },
    ]
  },
  {
    letter: "H",
    items: [
      { term: "HashMap", def: "Estructura de datos que almacena pares clave-valor. Permite búsquedas rápidas (O(1) promedio). Las claves deben ser únicas y los valores se recuperan por la clave." },
      { term: "HashSet", def: "Colección que almacena elementos únicos sin orden específico. Usa internamente un HashMap para garantizar que no haya duplicados." },
      { term: "Herencia", def: "Mecanismo de POO que permite a una clase (subclase) heredar atributos y métodos de otra clase (superclase). Se usa la palabra clave extends. Java no permite herencia múltiple de clases." },
    ]
  },
  {
    letter: "I",
    items: [
      { term: "If-Else", def: "Estructura de control condicional que ejecuta un bloque de código si una condición es verdadera y otro bloque si es falsa." },
      { term: "Instancia", def: "Objeto concreto creado a partir de una clase. Cuando se usa new Clase(), se crea una instancia (objeto) en memoria heap." },
      { term: "Interface", def: "Tipo de referencia que define un contrato de métodos abstractos que las clases implementadoras deben cumplir. Java 8+ permite métodos default y static en interfaces." },
      { term: "Iterator", def: "Objeto que permite recorrer una colección elemento por elemento, verificando si hay más elementos (hasNext()) y obteniendo el siguiente (next())." },
    ]
  },
  {
    letter: "J",
    items: [
      { term: "JDK (Java Development Kit)", def: "Kit de desarrollo que incluye el compilador (javac), la JVM, las librerías estándar y herramientas como el depurador. Lo necesitas para desarrollar aplicaciones Java." },
      { term: "JRE (Java Runtime Environment)", def: "Entorno de ejecución que incluye la JVM y las librerías estándar. Solo lo necesitas para ejecutar aplicaciones Java, no para desarrollarlas." },
      { term: "JVM (Java Virtual Machine)", def: "Máquina virtual que ejecuta el bytecode de Java. Es responsable de la portabilidad: 'Write Once, Run Anywhere'. Traduce bytecode a instrucciones nativas del sistema operativo." },
    ]
  },
  {
    letter: "L",
    items: [
      { term: "Lambda", def: "Función anónima que se puede pasar como argumento o asignar a una variable. Sintaxis: (parámetros) -> { cuerpo }. Introducidas en Java 8, permiten programación funcional." },
      { term: "LinkedList", def: "Estructura de datos basada en nodos doblemente enlazados. Ofrece inserciones y eliminaciones rápidas en los extremos pero acceso lento por índice." },
      { term: "LocalDate", def: "Clase del paquete java.time que representa una fecha sin hora ni zona horaria. Es inmutable y reemplaza a java.util.Date." },
    ]
  },
  {
    letter: "M",
    items: [
      { term: "Método", def: "Bloque de código que realiza una tarea específica. Puede recibir parámetros y devolver un valor. Los métodos definen el comportamiento de los objetos." },
      { term: "Método abstracto", def: "Método declarado sin implementación en una clase abstracta o interfaz. Las subclases concretas deben proporcionar su propia implementación." },
      { term: "Método estático (static)", def: "Método que pertenece a la clase en lugar de a las instancias. Se invoca usando el nombre de la clase: Clase.metodo(). No puede acceder a atributos de instancia." },
    ]
  },
  {
    letter: "O",
    items: [
      { term: "Objeto", def: "Entidad que tiene estado (atributos) y comportamiento (métodos). Es una instancia concreta de una clase. Se crea con la palabra clave new." },
      { term: "Optional<T>", def: "Contenedor que puede o no contener un valor no nulo. Introducido en Java 8 para evitar NullPointerException. Proporciona métodos como orElse(), ifPresent(), map()." },
      { term: "Override", def: "Acción de redefinir un método de la superclase en la subclase. La anotación @Override verifica en compilación que realmente se está sobreescribiendo un método existente." },
    ]
  },
  {
    letter: "P",
    items: [
      { term: "Pattern Matching", def: "Característica de Java 16+ que permite comprobar el tipo de un objeto y extraerlo en una variable en una sola expresión. Mejora switch y instanceof." },
      { term: "Polimorfismo", def: "Capacidad de un objeto de tomar múltiples formas. Permite que una variable de tipo padre pueda referenciar objetos de sus subclases y llamar a métodos específicos según el tipo real." },
      { term: "Primitivo", def: "Tipo de dato básico que almacena directamente su valor en la pila (Stack). Java tiene 8 tipos: byte, short, int, long, float, double, char y boolean." },
      { term: "Record", def: "Tipo especial de clase (Java 16+) que modela datos inmutables. Genera automáticamente constructor, getters, equals, hashCode y toString." },
    ]
  },
  {
    letter: "R",
    items: [
      { term: "Referencia", def: "Dirección de memoria que apunta a un objeto en el Heap. Las variables de tipo objeto almacenan referencias, no los objetos en sí." },
      { term: "RuntimeException", def: "Tipo de excepción que ocurre en tiempo de ejecución y no requiere manejo explícito. Ejemplos: NullPointerException, ArrayIndexOutOfBoundsException." },
    ]
  },
  {
    letter: "S",
    items: [
      { term: "Sealed Class", def: "Clase que restringe qué otras clases pueden extenderla. Se declara con la palabra clave sealed y una lista permits. Introducida en Java 17." },
      { term: "Serialización", def: "Proceso de convertir un objeto en una secuencia de bytes para almacenarlo en disco o transmitirlo por red. Se implementa con la interfaz Serializable." },
      { term: "Stream API", def: "API de Java 8 que permite procesar secuencias de datos con operaciones funcionales como map, filter, reduce. Soporta evaluación perezosa y paralelismo." },
      { term: "StringBuilder", def: "Clase mutable para construir cadenas de caracteres de manera eficiente. A diferencia de String, no crea nuevos objetos en cada concatenación." },
      { term: "Switch", def: "Estructura de control que permite ejecutar diferentes bloques de código según el valor de una expresión. Java 14+ mejoró switch con expresiones y arrow syntax." },
      { term: "Static", def: "Palabra clave que indica que un miembro (atributo o método) pertenece a la clase y no a las instancias. Se comparte entre todos los objetos de la clase." },
    ]
  },
  {
    letter: "T",
    items: [
      { term: "Text Block", def: "Cadena multilínea delimitada por triple comilla. Introducido en Java 15, permite escribir HTML, JSON o SQL de forma legible sin escapes." },
      { term: "Throw", def: "Palabra clave que lanza una excepción explícitamente: throw new Exception(\"mensaje\")." },
      { term: "Throws", def: "Palabra clave en la firma del método que declara las excepciones que puede lanzar: void metodo() throws IOException." },
      { term: "Try-Catch", def: "Estructura que maneja excepciones. try envuelve código que puede lanzar excepciones, catch las captura y maneja." },
      { term: "Try-With-Resources", def: "Variante de try que cierra automáticamente recursos que implementan AutoCloseable. Introducido en Java 7." },
    ]
  },
  {
    letter: "V",
    items: [
      { term: "Var", def: "Palabra clave (Java 10+) que permite inferencia de tipo en variables locales. El compilador determina el tipo: var texto = \"Hola\" equivale a String texto = \"Hola\"." },
      { term: "Varargs", def: "Mecanismo que permite pasar un número variable de argumentos a un método. Sintaxis: void metodo(String... args). Internamente se trata como un array." },
      { term: "Void", def: "Palabra clave que indica que un método no devuelve ningún valor. No debe confundirse con void (tipo) en otros contextos." },
    ]
  },
  {
    letter: "W",
    items: [
      { term: "While", def: "Estructura de control que repite un bloque de código mientras se cumpla una condición. La condición se evalúa al inicio, por lo que puede ejecutarse 0 veces." },
    ]
  },
];

export const glossaryEn: GlossaryGroup[] = [
  {
    letter: "A",
    items: [
      { term: "Abstract class", def: "A class that cannot be instantiated directly. It serves as a base for other classes through inheritance. It can contain abstract methods (without implementation) and concrete methods. It is declared with the `abstract` keyword." },
      { term: "Abstraction", def: "OOP principle that consists of hiding implementation details and showing only the essential functionality to the user. It is achieved through abstract classes and interfaces." },
      { term: "API (Application Programming Interface)", def: "Set of classes, interfaces and methods that Java provides ready to use. The standard Java API includes collections, I/O, networking, dates, etc." },
      { term: "ArrayList", def: "Dynamic collection that implements the List interface. Unlike traditional arrays, it can grow and shrink automatically. Ideal when you don't know the exact size in advance." },
      { term: "Array", def: "Data structure that stores elements of the same type in contiguous memory positions. In Java, arrays have a fixed size and can be of primitive types or objects." },
      { term: "Annotation (@Annotation)", def: "Metadata added to source code to provide information to the compiler or at runtime. Examples: @Override, @Deprecated, @FunctionalInterface." },
    ]
  },
  {
    letter: "B",
    items: [
      { term: "Break", def: "Statement that prematurely terminates a loop (for, while, do-while) or a switch. When executed, control jumps to the next statement after the loop or switch." },
      { term: "Bytecode", def: "Intermediate code generated by the Java compiler (javac) from source code. The JVM executes the bytecode, which enables the language's portability." },
    ]
  },
  {
    letter: "C",
    items: [
      { term: "Class", def: "Template or model that defines the properties (attributes) and behaviors (methods) of objects. It is the fundamental building block of object-oriented programming in Java." },
      { term: "Constructor", def: "Special method executed when creating an instance of a class. It has the same name as the class and no return type. There can be multiple constructors (overloading)." },
      { term: "Continue", def: "Statement that jumps to the next iteration of a loop, skipping the remaining code in the current iteration." },
      { term: "Checked Exception", def: "Exception that the compiler forces you to handle with try-catch or declare with throws. Examples: IOException, SQLException." },
    ]
  },
  {
    letter: "D",
    items: [
      { term: "Do-While", def: "Control structure that executes a block of code at least once and then repeats while a condition is met. The condition is evaluated at the end of each iteration." },
    ]
  },
  {
    letter: "E",
    items: [
      { term: "Encapsulation", def: "OOP principle that hides an object's internal data and only exposes controlled methods to access or modify it. In Java it is implemented with the private, public and protected modifiers." },
      { term: "Enum", def: "Special type that defines a fixed set of constants. Example: enum Day { MONDAY, TUESDAY, WEDNESDAY }. They can have fields, methods and constructors." },
      { term: "Exception", def: "Anomalous event that occurs during program execution and interrupts the normal flow of instructions. Java provides a robust mechanism to handle them." },
      { term: "Regular Expression (Regex)", def: "Search and text manipulation pattern. In Java it is used with the Pattern and Matcher classes from the java.util.regex package." },
    ]
  },
  {
    letter: "F",
    items: [
      { term: "Final", def: "Keyword that can be applied to variables (constant), methods (cannot be overridden) or classes (cannot be inherited)." },
      { term: "Finally", def: "Optional block in try-catch that always executes, whether or not an exception occurs. It is typically used to release resources such as closing files or connections." },
      { term: "For", def: "Control structure that repeats a block of code a set number of times. It has three parts: initialization, condition and update." },
      { term: "For-Each", def: "Variant of the for loop that traverses all elements of a collection or array without needing an explicit index." },
    ]
  },
  {
    letter: "G",
    items: [
      { term: "Garbage Collector (GC)", def: "Java's automatic mechanism that frees memory by removing objects that no longer have active references. The programmer does not need to manage memory manually." },
      { term: "Generics", def: "Mechanism that allows writing classes, interfaces and methods that operate with parameterized types. Example: ArrayList<String>. They provide type safety at compile time." },
    ]
  },
  {
    letter: "H",
    items: [
      { term: "HashMap", def: "Data structure that stores key-value pairs. It allows fast lookups (O(1) average). Keys must be unique and values are retrieved by key." },
      { term: "HashSet", def: "Collection that stores unique elements without a specific order. It internally uses a HashMap to ensure there are no duplicates." },
      { term: "Inheritance", def: "OOP mechanism that allows a class (subclass) to inherit attributes and methods from another class (superclass). The extends keyword is used. Java does not allow multiple class inheritance." },
    ]
  },
  {
    letter: "I",
    items: [
      { term: "If-Else", def: "Conditional control structure that executes a block of code if a condition is true and another block if it is false." },
      { term: "Instance", def: "Concrete object created from a class. When new Class() is used, an instance (object) is created in heap memory." },
      { term: "Interface", def: "Reference type that defines a contract of abstract methods that implementing classes must fulfill. Java 8+ allows default and static methods in interfaces." },
      { term: "Iterator", def: "Object that allows traversing a collection element by element, checking whether there are more elements (hasNext()) and getting the next one (next())." },
    ]
  },
  {
    letter: "J",
    items: [
      { term: "JDK (Java Development Kit)", def: "Development kit that includes the compiler (javac), the JVM, the standard libraries and tools such as the debugger. You need it to develop Java applications." },
      { term: "JRE (Java Runtime Environment)", def: "Runtime environment that includes the JVM and the standard libraries. You only need it to run Java applications, not to develop them." },
      { term: "JVM (Java Virtual Machine)", def: "Virtual machine that executes Java bytecode. It is responsible for portability: 'Write Once, Run Anywhere'. It translates bytecode into native instructions of the operating system." },
    ]
  },
  {
    letter: "L",
    items: [
      { term: "Lambda", def: "Anonymous function that can be passed as an argument or assigned to a variable. Syntax: (parameters) -> { body }. Introduced in Java 8, they enable functional programming." },
      { term: "LinkedList", def: "Data structure based on doubly linked nodes. It offers fast insertions and deletions at the ends but slow access by index." },
      { term: "LocalDate", def: "Class from the java.time package that represents a date without time or time zone. It is immutable and replaces java.util.Date." },
    ]
  },
  {
    letter: "M",
    items: [
      { term: "Method", def: "Block of code that performs a specific task. It can receive parameters and return a value. Methods define the behavior of objects." },
      { term: "Abstract method", def: "Method declared without implementation in an abstract class or interface. Concrete subclasses must provide their own implementation." },
      { term: "Static method", def: "Method that belongs to the class instead of the instances. It is invoked using the class name: Class.method(). It cannot access instance attributes." },
    ]
  },
  {
    letter: "O",
    items: [
      { term: "Object", def: "Entity that has state (attributes) and behavior (methods). It is a concrete instance of a class. It is created with the new keyword." },
      { term: "Optional<T>", def: "Container that may or may not hold a non-null value. Introduced in Java 8 to avoid NullPointerException. Provides methods such as orElse(), ifPresent(), map()." },
      { term: "Override", def: "Action of redefining a superclass method in the subclass. The @Override annotation verifies at compile time that you are actually overriding an existing method." },
    ]
  },
  {
    letter: "P",
    items: [
      { term: "Pattern Matching", def: "Java 16+ feature that allows checking an object's type and extracting it into a variable in a single expression. It improves switch and instanceof." },
      { term: "Polymorphism", def: "Ability of an object to take multiple forms. It allows a variable of a parent type to reference objects of its subclasses and call specific methods according to the real type." },
      { term: "Primitive", def: "Basic data type that stores its value directly on the Stack. Java has 8 types: byte, short, int, long, float, double, char and boolean." },
      { term: "Record", def: "Special class type (Java 16+) that models immutable data. It automatically generates the constructor, getters, equals, hashCode and toString." },
    ]
  },
  {
    letter: "R",
    items: [
      { term: "Reference", def: "Memory address that points to an object on the Heap. Object-type variables store references, not the objects themselves." },
      { term: "RuntimeException", def: "Exception type that occurs at runtime and does not require explicit handling. Examples: NullPointerException, ArrayIndexOutOfBoundsException." },
    ]
  },
  {
    letter: "S",
    items: [
      { term: "Sealed Class", def: "Class that restricts which other classes can extend it. It is declared with the sealed keyword and a permits list. Introduced in Java 17." },
      { term: "Serialization", def: "Process of converting an object into a byte sequence to store it on disk or transmit it over the network. It is implemented with the Serializable interface." },
      { term: "Stream API", def: "Java 8 API that allows processing data sequences with functional operations such as map, filter, reduce. It supports lazy evaluation and parallelism." },
      { term: "StringBuilder", def: "Mutable class for building character strings efficiently. Unlike String, it does not create new objects on each concatenation." },
      { term: "Switch", def: "Control structure that allows executing different code blocks depending on the value of an expression. Java 14+ improved switch with expressions and arrow syntax." },
      { term: "Static", def: "Keyword indicating that a member (attribute or method) belongs to the class and not to the instances. It is shared among all objects of the class." },
    ]
  },
  {
    letter: "T",
    items: [
      { term: "Text Block", def: "Multiline string delimited by triple quotes. Introduced in Java 15, it allows writing HTML, JSON or SQL in a readable way without escapes." },
      { term: "Throw", def: "Keyword that explicitly throws an exception: throw new Exception(\"message\")." },
      { term: "Throws", def: "Keyword in the method signature that declares the exceptions it can throw: void method() throws IOException." },
      { term: "Try-Catch", def: "Structure that handles exceptions. try wraps code that may throw exceptions, catch captures and handles them." },
      { term: "Try-With-Resources", def: "Variant of try that automatically closes resources implementing AutoCloseable. Introduced in Java 7." },
    ]
  },
  {
    letter: "V",
    items: [
      { term: "Var", def: "Keyword (Java 10+) that allows type inference for local variables. The compiler determines the type: var text = \"Hello\" is equivalent to String text = \"Hello\"." },
      { term: "Varargs", def: "Mechanism that allows passing a variable number of arguments to a method. Syntax: void method(String... args). Internally it is treated as an array." },
      { term: "Void", def: "Keyword indicating that a method does not return any value. It should not be confused with void (type) in other contexts." },
    ]
  },
  {
    letter: "W",
    items: [
      { term: "While", def: "Control structure that repeats a block of code while a condition is met. The condition is evaluated at the beginning, so it can execute 0 times." },
    ]
  },
];
