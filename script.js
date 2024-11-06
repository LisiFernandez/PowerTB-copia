// Função para carregar o header
async function loadHeader() {
    fetch('../componentes/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;

                // Adicione event listeners após o header ser carregado
                const menuBtn = document.getElementById('menu-btn');
                if (menuBtn) {
                    menuBtn.addEventListener('click', function() {
                        console.log("botão clicado");
                        document.querySelector('.main-nav').classList.toggle('open');
                    });
                }

                const closeBtn = document.querySelector('.menu-fechar-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        document.querySelector('.main-nav').classList.remove('open');
                    });
                }
            }
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
}

