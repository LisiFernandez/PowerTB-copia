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

// Função para carregar o footer
function loadFooter() {
    fetch('../componentes/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById("footer-placeholder");
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}

// Carrega os componentes ao carregar a página
window.onload = function() {
    loadHeader();
    loadFooter();
};


// Função para verificar a licença
function verificarLicenca() {
    // Verifica se a data de ativação já está armazenada
    const dataAtivacao = localStorage.getItem('dataAtivacao');
    const hoje = new Date();

    // Se a data de ativação não existir, ativa a licença agora
    if (!dataAtivacao) {
        const dataAtual = hoje.toISOString(); // Armazena a data atual
        localStorage.setItem('dataAtivacao', dataAtual);
        alert("Você tem 1 dias de acesso.");
        return; // Sai da função, pois a licença foi ativada
    }

    // Converte a data armazenada para um objeto Date
    const dataAtivada = new Date(dataAtivacao);

    // Calcula a diferença em milissegundos
    const diasDesdeAtivacao = Math.floor((hoje - dataAtivada) / (1000 * 60 * 60 * 24));

    // Verifica se já se passaram 15 dias
    if (diasDesdeAtivacao >= 1) {
        // Solicita a chave de acesso
        const chaveDeAcesso = prompt("A licença expirou! Por favor, insira sua chave de acesso para continuar:");

        if (chaveDeAcesso === "@qMpz!tv%") { // Substitua pela chave real
            alert("Chave de acesso válida! A licença foi renovada.");
            // Atualiza a data de ativação para agora
            localStorage.setItem('dataAtivacao', hoje.toISOString());
        } else {
            alert("Chave de acesso inválida! Acesso negado.");
            window.location.href = "pagina_de_erro.html"
        }
    } else {
        alert(`Licença válida! Restam ${15 - diasDesdeAtivacao} dias de acesso.`);
        // Aqui você pode permitir o acesso ao site
    }
}

// Chame a função ao carregar a página
window.onload = function() {
    verificarLicenca();
};

