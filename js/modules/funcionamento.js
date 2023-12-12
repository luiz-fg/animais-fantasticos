export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horaAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1] ? true : false;

  if (horaAberto && semanaAberto) {
    funcionamento.classList.add('aberto');
  }
}
