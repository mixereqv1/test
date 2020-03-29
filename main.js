const pictures = [
  'https://icons.iconarchive.com/icons/giannis-zographos/german-football-club/256/1-FC-Kaiserslautern-icon.png',
  'https://static.tvtropes.org/pmwiki/pub/images/6c6716bdf62205cba27315b62855190e.jpg',
  'https://a.allegroimg.com/s128/11fd0c/7c0d1c7c4b4a92618180ac53b821',
  'https://post-daniela.eu/wp-content/uploads/2014/06/185061-photo-pictures-streamline.png'
];

const picturesArray = Array.from(pictures);

const randomButton = document.querySelector('#randomButton');
const img = document.querySelectorAll('.img');
const delButtons = document.querySelectorAll('.del');
let i = 0;

randomButton.addEventListener('click', () => {
  if(i < 4) {
    const randomNumber = Math.floor(Math.random() * 4);
    img[i].src = pictures[randomNumber];
  } else {
    for(let a=0; a<pictures.length; a++) {
      if(!picturesArray.includes(img[a].src)) {
        const randomNumber = Math.floor(Math.random() * 4);
        img[a].src = pictures[randomNumber];
        break;
      }
    }
  }
  i++;
})

delButtons.forEach((el, y) => {
  el.addEventListener('click', () => {
    img[y].src = null;
  })
})