//Parte do header, diminui o tamanho do menu no momento em que houver scroll

const menu = document.querySelector('#menu');
const img = document.querySelector('#logo');
const h1 = document.querySelector('.headerIndexH1, .headerServiçosh1, .headerBlogH1, .headerQSomosH1, .headerMarcasH1, .headerLCarH1, .headerContatosh1');

const main = document.querySelector('.corpo');

function diminuirMenu() {
if (window.scrollY > 60) {             //telas pqna
    menu.style.height = '110px'; 
    menu.style.position = 'fixed'; 
    menu.style.backgroundColor = 'white';

    //img.style.height = '90px'; 
    //img.style.width = '90px'; 
    //img.style.margin = '10px 100px';

    // Condição para o tamanho da tela (responsividade)
    if (window.innerWidth < 799) { // Tela pequena 
        img.style.height = '70px'; 
        img.style.width = '70px'; 
        img.style.margin = '10px 30px';
    } else { // Para telas maiores
        img.style.height = '90px'; 
        img.style.width = '90px'; 
        img.style.margin = '10px 100px';
    }

    main.style.margin = '25% 0% 5% 0%';
    h1.style.display = 'none';

} else {                            //telas grande
    menu.style.height = '100vh'; 
    menu.style.position = 'fixed'; 

    //img.style.height = '150px'; 
    //img.style.width = '150px'; 
    //img.style.margin = '10px 30px';

    // Condição para o tamanho da tela (responsividade)
    if (window.innerWidth < 799) { // Tela pequena
        img.style.height = '100px'; 
        img.style.width = '100px'; 
        img.style.margin = '10px 30px';
    } else { // Para telas maiores
        img.style.height = '150px'; 
        img.style.width = '150px'; 
        img.style.margin = '10px 30px';
    }

    h1.style.display = 'block';
}
}

// Evento de scroll para diminuir o menu
window.addEventListener('scroll', diminuirMenu);

// Adicionando a verificação de tamanho de tela no início para aplicar o tamanho correto da logo quando carregar a página
window.addEventListener('load', diminuirMenu);


//Para o menu responsivo
function toggleMenu() {
    let menu = document.querySelector("#menuzinho");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Fecha o menu quando um link for clicado
document.querySelectorAll("#menuzinho a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector("#menuzinho").style.display = "none";
    });
});



//Parte da seta subindo
const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
}