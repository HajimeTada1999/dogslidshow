let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.nihonpet.co.jp/dog/img/top_dog002.jpg",
"https://heartbeat.jpn.com/wp-content/uploads/2021/04/IMG_4640.jpg",
"https://www.anicom-sompo.co.jp/inu/wp-content/uploads/2021/02/2007_01.jpg",
"https://www.axa-direct.co.jp/s/pet/img/library/mv_library_dog_french_bulldog.png",
"https://image.petokoto.com/media/2020/03/shunauzercut03.png",
"https://www.axa-direct.co.jp/pet/pet-ms/img/media/2017/10/img_shiba_kind-dog_kv-710x398.jpg",
"https://www.axa-direct.co.jp/s/pet/img/library/mv_library_dog_yorkshire_terrier.png",
"https://www.docdog.jp/assets_c/2019/06/aa_85_head-thumb-660x440-103056.jpg",
"https://www.min-inuzukan.com/images/detailMain_maltese.png?20200203_l",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src',url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src',url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
