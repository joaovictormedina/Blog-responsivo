document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos
    const secondContainer = document.querySelector('.second-container');
    const thirdContainer = document.querySelector('.third-container');
    const viewAllLink = document.querySelector('.view-all-link');

    // Inicialmente, oculta as divs
    secondContainer.style.visibility = 'hidden';
    thirdContainer.style.visibility = 'hidden';

    // Adiciona um ouvinte de eventos ao link "Ver todos"
    viewAllLink.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Alterna a visibilidade das divs
        if (secondContainer.style.visibility === 'hidden') {
            secondContainer.style.visibility = 'visible';
            thirdContainer.style.visibility = 'visible';
            viewAllLink.textContent = 'Ver menos'; // Opcional: altera o texto do link
        } else {
            secondContainer.style.visibility = 'hidden';
            thirdContainer.style.visibility = 'hidden';
            viewAllLink.textContent = 'Ver todos'; // Opcional: altera o texto do link
        }
    });

    // Função para contar a quantidade de vídeos em uma categoria
    function countCategoryItems(category) {
        const items = document.querySelectorAll('.recent-text.text-1');
        return Array.from(items).filter(item => item.textContent.trim().toLowerCase() === category.toLowerCase()).length;
    }

    // Função para contar a quantidade de itens com a categoria "opinião"
    function countOpinionItems() {
        const items = document.querySelectorAll('.recent-text.text-3');
        return Array.from(items).filter(item => item.textContent.includes('Fulano da Silva')).length;
    }

    // Função para atualizar a contagem na lista de categorias
    function updateCategoryCounts() {
        // Contar itens para cada categoria
        const saudeCount = countCategoryItems('saude');
        const desenvolvimentoCount = countCategoryItems('desenvolvimento');
        const produtividadeCount = countCategoryItems('produtividade');
        const opiniaoCount = countOpinionItems(); // Conta "opinião" como "Fulano da Silva"

        // Atualizar os elementos HTML com as contagens
        document.getElementById('category-saude').innerHTML = `&gt; saúde (${saudeCount})`;
        document.getElementById('category-desenvolvimento').innerHTML = `&gt; desenvolvimento (${desenvolvimentoCount})`;
        document.getElementById('category-produtividade').innerHTML = `&gt; produtividade (${produtividadeCount})`;
        document.getElementById('category-opiniao').innerHTML = `&gt; opinião (${opiniaoCount})`;
    }

    // Atualiza a contagem ao carregar a página
    updateCategoryCounts();
});
