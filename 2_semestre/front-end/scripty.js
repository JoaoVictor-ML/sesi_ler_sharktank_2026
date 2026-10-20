function esconderTelas() {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("sobre").classList.add("escondido");
    document.getElementById("login").classList.add("escondido");
    document.getElementById("painel").classList.add("escondido");
}

function mostrarInicio() {
    esconderTelas();

    document.getElementById("inicio").classList.remove("escondido");
    document.getElementById("sobre").classList.remove("escondido");

    window.scrollTo(0, 0);
}

function mostrarLogin() {
    esconderTelas();

    document.getElementById("login").classList.remove("escondido");

    mostrarFormulario("login");

    window.scrollTo(0, 0);
}

function mostrarFormulario(tipo) {
    document.getElementById("form-login").classList.add("escondido");
    document.getElementById("form-cadastro").classList.add("escondido");
    document.getElementById("form-solicitar").classList.add("escondido");

    if (tipo == "login") {
        document.getElementById("form-login").classList.remove("escondido");
    }

    if (tipo == "cadastro") {
        document.getElementById("form-cadastro").classList.remove("escondido");
    }

    if (tipo == "solicitar") {
        document.getElementById("form-solicitar").classList.remove("escondido");
    }
}

function entrar(evento) {
    evento.preventDefault();

    var perfil = document.querySelector('input[name="perfil"]:checked');

    if (perfil) {
        esconderTelas();

        document.getElementById("painel").classList.remove("escondido");

        document.getElementById("mensagem-perfil").textContent =
            "Você está acessando como " + perfil.value + ".";

        window.scrollTo(0, 0);
    } else {
        alert("Selecione seu perfil para continuar.");
    }
}

function sair() {
    mostrarLogin();

    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}

function enviarFormulario(evento, tipo) {
    evento.preventDefault();

    if (tipo == "cadastro") {
        alert("Cadastro preenchido! Esta é uma demonstração. Para cadastrar usuários de verdade, precisamos conectar o sistema a um banco de dados.");
    } else {
        alert("Solicitação preenchida! Para enviar à coordenação de verdade, precisamos conectar o sistema a um servidor.");
    }

    mostrarFormulario("login");
}

function abrirRecurso(tipo) {
    var campos = document.getElementById("campos-recurso");
    var titulo = document.getElementById("titulo-recurso");
    var resultado = document.getElementById("resultado-registro");

    resultado.textContent = "";

    if (tipo == "contagem") {
        titulo.textContent = "Contagem de alunos";

        campos.innerHTML = `
            <label>Data</label>
            <input type="date" required>

            <label>Período</label>
            <select required>
                <option value="">Selecione</option>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
            </select>

            <label>Quantidade prevista de alunos</label>
            <input type="number" min="0" placeholder="Ex.: 180" required>

            <label>Quantidade de alunos que se alimentaram</label>
            <input type="number" min="0" placeholder="Ex.: 155" required>
        `;
    }

    if (tipo == "avaliacao") {
        titulo.textContent = "Avaliação da refeição";

        campos.innerHTML = `
            <label>Data</label>
            <input type="date" required>

            <label>Refeição / cardápio</label>
            <input type="text" placeholder="Nome da refeição" required>

            <label>Aceitação da refeição</label>
            <select required>
                <option value="">Selecione</option>
                <option>Ótima</option>
                <option>Boa</option>
                <option>Regular</option>
                <option>Baixa</option>
            </select>

            <label>Observações</label>
            <textarea placeholder="Registre comentários importantes" required></textarea>
        `;
    }

    if (tipo == "relatorio") {
        titulo.textContent = "Relatório de produção";

        campos.innerHTML = `
            <label>Data</label>
            <input type="date" required>

            <label>Refeição preparada</label>
            <input type="text" placeholder="Nome da refeição" required>

            <label>Quantidade de comida produzida (kg)</label>
            <input type="number" min="0" step="0.1" placeholder="Ex.: 25" required>

            <label>Observações sobre sobra ou desperdício</label>
            <textarea placeholder="Descreva o que aconteceu" required></textarea>
        `;
    }

    document.getElementById("recurso-form").classList.remove("escondido");

    document.getElementById("recurso-form").scrollIntoView({
        behavior: "smooth"
    });
}

function salvarRegistro(evento) {
    evento.preventDefault();

    document.getElementById("resultado-registro").textContent =
        "Registro preenchido! Para guardar os dados e gerar relatórios, será necessário conectar um banco de dados.";
}
