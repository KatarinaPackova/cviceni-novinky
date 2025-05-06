/* const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';
const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = '#ffffff';
const newsElement = document.querySelector('.news');
newsElement.style.maxWidth = '60 rem';
const h1Element = document.querySelector('h1');
h1Element.classList.add('.news__title');
 */

const bodyElement = document.querySelector('body');
bodyElement.style.color = '#e9e9e9';

const news = document.querySelector('.news');
news.style.backroundColor = '#ffffff';
news.style.width = '60rem';

const nadpisElement = document.querySelector('h1');
nadpisElement.classList.add('news__title');
nadpisElement.textContent = 'Aktualni novinky';

const firstNews = document.getElementById('zprava1');
firstNews.classList.add('post--main');
const tretiZprava = document.querySelector('#zprava3 img');
tretiZprava.src = 'images/zprava3-novy.jpg';
