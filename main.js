var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
        + noticia.titulo
        + '</p>'
        + '<p class="conteudo">'
        + noticia.conteudo
        + '<br>'
        + '<p class="autor">'
        + noticia.autor
        + '<br>'
        + '<p class="email">'
        + noticia.email
        + '<br>'
        + '<p class="conteudo">'
        + noticia.date
        + '<br>'
        + '<p class="conteudo">'
        + noticia.time
        + '<br>'
        + '<span>------------------</span>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
        + '</p>';
    lista.appendChild(li);
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var autor = document.getElementById('frm-autor').value;
    var email = document.getElementById('frm-email').email;
    var date = document.getElementById('frm-datepublic').date;
    var time = document.getElementById('frm-timepublic').time;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo,
        autor: altor,
        email: email,
        date: date,
        time: time
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}