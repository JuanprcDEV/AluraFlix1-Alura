//Array com as capas
var listaFilmes = [
  "https://i.pinimg.com/originals/e1/72/12/e172124e03d7e6ab515b4567761fcf73.jpg",
  "https://static.wikia.nocookie.net/brooklynnine-nine/images/c/ce/Season_7_poster.jpg",
  "https://static.wikia.nocookie.net/himym/images/4/46/HIMYM_poster.jpg",
  "https://www.omelete.com.br/webstories/derivado-the-big-bang-theory/assets/2.jpeg",
  "https://i.pinimg.com/736x/d9/48/b0/d948b07c300635b48cef721d1a6d1bc8.jpg",
  "https://m.media-amazon.com/images/I/91RNSMNJlsL._AC_SL1500_.jpg",

  "https://www.dreamogram.com/wp-content/uploads/2019/10/022_dreamogram-iconisus-key-art-movie-poster-mr.-robot-season-1_vertical-cover.jpg",
  "https://static.wikia.nocookie.net/walkingdead/images/f/fc/The_Walking_Dead_-_The_Complete_First_Season.jpg",
  "https://i0.wp.com/moviesnstuff.com/wp-content/uploads/2021/07/What-We-Do-in-the-Shadows-Season-1-2019.jpg",
  "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "https://br.web.img3.acsta.net/pictures/20/07/16/10/21/4967802.jpg",
  "https://img.elo7.com.br/product/original/4708838/poster-serie-the-last-of-us-hbo-a2-tamanho-60x42-cm-lo04-decoracao-geek.jpg",
  "https://goldenglobes.com/wp-content/uploads/2023/10/Severance-2022.jpg",
  "https://pbs.twimg.com/media/FL0-TLRX0AMi6_1.jpg",
  "https://img.elo7.com.br/product/original/3041510/big-poster-serie-stranger-things-netflix-lo001-90x60-cm-geek.jpg",
  "https://br.web.img3.acsta.net/pictures/19/06/18/12/06/4123858.jpg"
];

//Array com os nomes
var nomeFilmes = [
  "The Office",
  "Brooklyn 99",
  "How I Met Your Mother",
  "The Big Bang Theory",
  "Supernatural",
  "Breaking Bad",
  "Mr. Robot",
  "The Walking Dead",
  "What We do In The Shadows",
  "Game of Thrones",
  "Ted Lasso",
  "The Last Of Us",
  "Severance",
  "Peaky Blinders",
  "Stranger Things",
  "Euphoria"
];

//Container
document.write('<div class="container_todosFilmes">');

//Comando para mostrar capa + filme na tela
for (var i = 0; i < listaFilmes.length; i = i + 1) {
  document.write('<div class="container_filme">');
  document.write("<img src=" + listaFilmes[i] + ">");
  document.write("<p>" + nomeFilmes[i] + "</p>");
  document.write("</div>");
}