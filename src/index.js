import { Router } from "./router.js";

// Controle das rotas após ter criado o router.js:
const router = new Router();

router.add("/", "pages/home.html");
router.add("/universe", "pages/universe.html");
router.add("/exploration", "pages/exploration.html");
router.add("404", "pages/404.html");

router.handle(); // executa a fcn handle também após a leitura do script.

window.onpopstate = () => router.handle(); // método q garante tb o carregamento dos html, caso o usuário navegue pelos comandos <- -> do browser.
window.route = () => router.route(); // método q garante o funcionamento tb da fcn route após o carregamento do script.
