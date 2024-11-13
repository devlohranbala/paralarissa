// Variável para armazenar o timeout da digitação
let typingTimeout;

// Função para mostrar o slide
function showSlide() {
  document.getElementById('slide').style.display = 'flex';
}

// Evento onload para carregar a página
onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const text = "Desde o momento em que nos conhecemos, meu amor por você só cresce. Você tem uma maneira única de cuidar de mim, sempre atenta aos detalhes e preocupada com o meu bem-estar. Juntos, enfrentamos nossos problemas com paciência e compreensão, sempre buscando soluções que fortaleçam nossa relação. Os momentos de carinho que compartilhamos são preciosos. Seja um abraço apertado ou um simples toque de mãos, cada gesto é uma demonstração do nosso amor e da nossa conexão. Estamos sempre nos apoiando para sermos melhores, incentivando um ao outro a alcançar nossos sonhos e objetivos. Admiro profundamente a mulher que você é. Sua determinação e independência são inspiradoras. Você batalha por tudo o que deseja e nunca depende de ninguém para conquistar suas metas. Essa força e resiliência me fazem te amar ainda mais. Sou grato por ter você ao meu lado. Nosso amor é a base de tudo, e sei que, com você, posso enfrentar qualquer desafio. Te amo mais do que palavras podem expressar.";
  typeText(text);
};

// Função para simular o efeito de digitação
function typeText(text) {
  const typingText = document.getElementById("typing-text");
  typingText.textContent = ""; // Limpa o texto existente
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      typingTimeout = setTimeout(type, 150); // Ajuste o tempo conforme necessário
    }
  }

  // Limpa qualquer timeout de digitação anterior
  clearTimeout(typingTimeout);
  type();
}

// Data do início do namoro
const dataInicio = new Date(2024, 9, 13); // Outubro é o mês 9, pois o mês começa em 0

// Função para calcular a diferença em anos, meses e dias
function calcularTempo() {
  const hoje = new Date();
  
  // Calcula a diferença em milissegundos
  let anos = hoje.getFullYear() - dataInicio.getFullYear();
  let meses = hoje.getMonth() - dataInicio.getMonth();
  let dias = hoje.getDate() - dataInicio.getDate();
  
  // Se o mês atual for menor que o mês de início, diminui 1 ano e ajusta os meses
  if (meses < 0) {
    anos--;
    meses += 12;
  }
  
  // Se o número de dias for negativo, subtrai 1 mês e ajusta os dias
  if (dias < 0) {
    meses--;
    const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoDiaDoMes;
  }

  // Cria uma array para armazenar as partes da string
  let partes = [];

  // Adiciona "anos" no plural ou singular dependendo do valor
  if (anos > 0) {
    partes.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`);
  }
  
  // Adiciona "meses" no plural ou singular dependendo do valor
  if (meses > 0) {
    partes.push(`${meses} ${meses === 1 ? 'mês' : 'meses'}`);
  }

  // Adiciona "dias" no plural ou singular dependendo do valor
  if (dias > 0) {
    partes.push(`${dias} ${dias === 1 ? 'dia' : 'dias'}`);
  }

  // Caso não tenha nenhuma parte para adicionar, mostra "0 dias"
  if (partes.length === 0) {
    partes.push("0 dias");
  }
  
  // Atualiza o conteúdo do contador com a string formatada
  document.getElementById('contador').innerHTML = partes.join(" | ");
}

// Atualiza o contador a cada 1 segundo
setInterval(calcularTempo, 1000);

// Inicializa a contagem ao carregar a página
calcularTempo();

// Controle de áudio (play/pause)
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
    typeText("A música “Interessante” do Ferrugem sempre terá um lugar especial no meu coração. Foi com essa canção que voce aceitou o meu pedido de namoro, e desde então, ela se tornou a trilha sonora do nosso amor. A letra fala sobre como, mesmo não se achando interessante, o olhar da pessoa amada pode transformar tudo. É exatamente assim que me sinto com você. Cada vez que olho nos seus olhos, vejo um diamante a se lapidar, e sinto que nosso encontro foi marcado pelo destino. Você chegou na minha vida sem pedir licença e trouxe uma alegria que eu nunca tinha conhecido. Por favor, nunca saia da minha vida. Quero aprender a ser a pessoa certa para você, porque sei que o amor fará o resto. Te amo muito e sou grato por cada momento que compartilhamos. Que nossa história continue sendo tão linda quanto a letra dessa música."); // Escreve novo texto com efeito de digitação
  } else {
    audio.pause();
    playPauseBtn.classList.remove('pause');
    playPauseBtn.classList.add('play');
    typeText("Música pausada."); // Escreve novo texto com efeito de digitação
  }
});

// Adicionando o evento de clique no contador
document.getElementById('contador').addEventListener('click', () => {
  // Limpa o conteúdo do contador ao clicar
  document.getElementById('contador').innerHTML = '';
  
  // Define o novo texto que será exibido
  const novoTexto = "Tempo que estamos oficialmente juntos.";
  
  // Chama a função typeText para digitar o novo texto diretamente no contador
  typeText(novoTexto);
});