document.querySelector('.cart').addEventListener('click', startShopping);
document.getElementById('addItemBtn').addEventListener('click', adicionarItem);

let listaDeCompras = [];

function startShopping() {
    document.querySelector('.container').style.display = 'flex';
    const staticCart = document.getElementById('staticCart');
    staticCart.id = 'animatedCart';
    const animatedCart = document.getElementById('animatedCart');
    animatedCart.classList.add('animated');
}

function adicionarItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();
    const categoria = getSelectedCategory();

    if (item && categoria) {
        listaDeCompras.push({ item, categoria });
        alert(`${item} foi adicionado à sua lista de compras na categoria ${categoria}.`);
        animateCart();
        itemInput.value = ''; // Limpar o campo de entrada
        clearCategorySelection(); // Limpar a seleção de categoria
    } else {
        alert("Por favor, digite o nome de um item e selecione uma categoria.");
    }
}

function getSelectedCategory() {
    const categorias = document.getElementsByName('categoria');
    for (const categoria of categorias) {
        if (categoria.checked) {
            return categoria.value;
        }
    }
    return null;
}

function clearCategorySelection() {
    const categorias = document.getElementsByName('categoria');
    for (const categoria of categorias) {
        categoria.checked = false;
    }
}

function animateCart() {
    const cart = document.getElementById('animatedCart');
    cart.classList.add('animated');

    setTimeout(() => {
        cart.classList.remove('animated');
    }, 2000);

  }

function mostrarCompras() {
    var resultMessage = document.getElementById("result-message");
    resultMessage.innerHTML = "";

    if (listaDeCompras.length > 0) {
        const categorias = {
            Frutas: [],
            Laticínios: [],
            Congelados: [],
            Doces: [],
            Outros: []
        };

        listaDeCompras.forEach(item => {
            categorias[item.categoria].push(item.item);
        });

        let mensagem = "<strong>Lista de compras:</strong><br>";
        for (let categoria in categorias) {
            mensagem += `<strong>${categoria}: </strong> ${categorias[categoria].join(',') || ''}<br>`;
        }
        resultMessage.innerHTML = mensagem;
    }
    document.getElementById("result").style.display = "block";
}