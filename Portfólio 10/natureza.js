const modal1 = document.getElementById('modal-1');
const modal2 = document.getElementById('modal-2');
const modal3 = document.getElementById('modal-3');

// Obtendo os botões de fechar
const close1 = document.getElementById('close-1');
const close2 = document.getElementById('close-2');
const close3 = document.getElementById('close-3');

// Obtendo os h2
const h2_1 = document.getElementById('h2-1');
const h2_2 = document.getElementById('h2-2');
const h2_3 = document.getElementById('h2-3');

// Função para abrir o modal
function openModal(modal) {
    modal.style.display = "block";
}

// Funções para fechar os modais
function closeModal(modal) {
    modal.style.display = "none";
}

// Eventos de click para abrir os modais
h2_1.onclick = function() {
    openModal(modal1);
}

h2_2.onclick = function() {
    openModal(modal2);
}

h2_3.onclick = function() {
    openModal(modal3);
}

// Eventos de click para fechar os modais
close1.onclick = function() {
    closeModal(modal1);
}

close2.onclick = function() {
    closeModal(modal2);
}

close3.onclick = function() {
    closeModal(modal3);
}

// Fechar o modal se clicar fora do conteúdo do modal (opcional)
window.onclick = function(event) {
    if (event.target === modal1) {
        closeModal(modal1);
    }
    if (event.target === modal2) {
        closeModal(modal2);
    }
    if (event.target === modal3) {
        closeModal(modal3);
    }
}
function Humanas() {
    document.location.href = 'humanas.html'  //cria uma function com o objetivo de quando ativa, mandar para outra tela//
}
function Linguagens() {
    document.location.href = 'Linguagens.html'  //cria uma function com o objetivo de quando ativa, mandar para outra tela//
}
function Matemática() {
    document.location.href = 'matematica.html'  //cria uma function com o objetivo de quando ativa, mandar para outra tela//
}
function Técnico() {
    document.location.href = 'tecnico.html'  //cria uma function com o objetivo de quando ativa, mandar para outra tela//
}
