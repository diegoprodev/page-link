function toggleMode() {
    html = document.documentElement
    html.classList.toggle("light")

    /*pegar img através de uma variavel qualquer queryselector( pesquisa pelo seletor)
    usamos o mesmo seletor css profile*/ 
    img = document.querySelector("#profile img")

    if (html.classList.contains ("light")) {

        /* usar condições, se tiver em light add img light usando o set atriburte*/

        img.setAttribute("src",  "./assets/Diego-Light.png")
        img.setAttribute("alt",  "diego usando oculos")
    } 
        /* caso não tenha o light mode. manter a imagem padrão*/
    else 
        img.setAttribute("src", "./assets/Diego-Dark.png") 
        img.setAttribute("alt",  "diego top dev")



}