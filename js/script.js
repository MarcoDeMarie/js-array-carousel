containerIMG = document.querySelector('.container-img')
btnNext = document.querySelector('.btn-next')
btnPrev = document.querySelector('.btn-prev')




const images = 5;
let imgHtml = '';
let imgI = 1;

for(let i = 1; i <= images; i++){
  if( i === 1){
    containerIMG.innerHTML += `<img id="img${i}" class="show" src="img/0${i}.webp" alt="">`
  }
  else{
    containerIMG.innerHTML += `<img id="img${i}" class="hide" src="img/0${i}.webp" alt="">`
  }
};

btnNext.addEventListener('click', function(){
  imgCurrent = document.querySelector(`#img${imgI}`)
  imgNext = document.querySelector(`#img${imgI + 1}`)
  imgCurrent.classList.add('hide')
  imgCurrent.classList.remove('show')
  imgNext.classList.remove('hide')
  imgNext.classList.add('show')
  imgI = imgI + 1
})


btnPrev.addEventListener('click', function(){
  imgCurrent = document.querySelector(`#img${imgI}`)
  imgNext = document.querySelector(`#img${imgI - 1}`)
  imgCurrent.classList.add('hide')
  imgCurrent.classList.remove('show')
  imgNext.classList.remove('hide')
  imgNext.classList.add('show')
  imgI = imgI - 1
})





console.log(containerIMG)





