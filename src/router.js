export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
    // exemplo: pense no obj c/ essa prop/valor "/": "pages/home.html" ---> em q routName = "/" e "pages/home.html" = page
  }

  route(event) {
    event = event || window.event; // Verifica se passou o evento, se não passou, verifica na "window" q é OBJ GLOBAL do navegador que contém tudão inclusive, o document (html).
    event.preventDefault(); // "evite o padrão", q no caso da tag a é redirecionar após o clique!

    window.history.pushState({}, "", event.target.href); // insere o histórico na fcn route informando q há mudança de pág. Esse histórico posteriomente será usado na fcn handle.

    this.handle();
  }

  handle() {
    //const pathname = window.location.pathname; // pathname é o conteúdo q vem depois da "/".

    // Desestructuring: aqui, apenas copiamos a prop pathname de location e criamos uma const. Isso é útil para quando tivermos que usar mts propriedades.
    const { pathname } = window.location;

    // console.log (pathname);

    const route = this.routes[pathname] || this.routes[404]; // const route pega o caminho de cada rota (lembra que tb podia ser os exemplos c/ route = ["/"]. Caso não haja rota, apresenta a pág de erro 404);

    // console.log("Antes da fetch.");
    fetch(route) // prometi que vou buscar!
      .then((data) => data.text()) // transforma todas as info em texto
      .then(
        (
          html // Exemplo só p/visualizar: console.log(html) // pega o conteúdo html e mostra o html
        ) => {
          document.querySelector("#app").innerHTML = html;
        }
      ); // informa que html interno do elemento app será o html acima.
  }
}
