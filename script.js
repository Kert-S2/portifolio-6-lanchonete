// Menu mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Especial do dia: alterna entre os especiais da semana ao clicar no botão
// PERSONALIZAR: edite os textos da lista abaixo com seus próprios especiais
const especiais = [
  'Segunda: Cheeseburger + milkshake por R$ 32',
  'Terça: Dog retrô em dobro',
  'Quarta: Milkshake com 20% de desconto',
  'Quinta: Duplo bacon + batata por R$ 38',
  'Sexta: Sundae grátis em pedidos acima de R$ 50'
];
let especialIndex = 0;

const specialName = document.getElementById('specialName');
const specialBtn = document.getElementById('specialBtn');

if (specialBtn && specialName) {
  specialBtn.addEventListener('click', () => {
    especialIndex = (especialIndex + 1) % especiais.length;
    specialName.textContent = especiais[especialIndex];
  });
}
