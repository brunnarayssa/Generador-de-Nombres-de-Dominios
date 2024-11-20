let pronoun = ["El", "Nuestro", "Un", "Este"];
let adj = ["gran", "super", "genial", "colosal"];
let noun = ["castor", "animal", "perro", "arbol"];

function domainGenerator() {
  for (let i = 0; i < 4; i++) {
    // Generar dominios con el prefijo "4geeks"
    alert("www.4geeks" + pronoun[i] + adj[i] + noun[i] + ".com");
    alert("www.4geeks" + adj[i] + pronoun[i] + noun[i] + ".com");
    alert("www.4geeks" + pronoun[i] + noun[i] + adj[i] + ".com");
  }
}

domainGenerator();
