import { db } from "./firebase-config.js";
import {
    ref,
    push,
    get,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";

const referenciaFilmes = ref(db, "filmes");

export function adicionarFilme(nomeFilme){
    return push(referenciaFilmes, {
        nome: nomeFilme,
        assistido: false
    });
}
 
export function buscarFilme(){
    return get(referenciaFilmes);
}

export function alternarAssistido(id, statusAtual){
    const filmeRef = ref(db, "filmes/" + id);
    return update(filmeRef, { assistido: !statusAtual});
}

export function apagarFilme(id){
    const filmeRef = ref(db, "filmes/" + id);
    return remove(filmeRef);
}