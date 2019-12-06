/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

/* 

  Fade out: 1s
  Time function: 1s 

*/

var index = 0;

function carousel() {

  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');

  carousel.className = 'carousel';
  leftButton.className = 'left-button';
  rightButton.className = 'right-button';

  const images = [imgOne = document.createElement('img'), imgTwo = document.createElement('img'), imgThree = document.createElement('img'), document.createElement('img')];

  images[0].src = './assets/carousel/mountains.jpeg';
  images[1].src = './assets/carousel/computer.jpeg';
  images[2].src = './assets/carousel/trees.jpeg';
  images[3].src = './assets/carousel/turntable.jpeg';

  processIndex(index, images);

  leftButton.addEventListener('click', () => {

    if (index <= 0)
      processIndex((index = 3), images);
    else
      processIndex(--index, images);

  });

  rightButton.addEventListener('click', () => {

    if (index >= 3)
      processIndex((index = 0), images);
    else
      processIndex(++index, images);

  });

  carousel.appendChild(leftButton);
  carousel.appendChild(images[0]);
  carousel.appendChild(images[1]);
  carousel.appendChild(images[2]);
  carousel.appendChild(images[3]);
  carousel.appendChild(rightButton);

  return carousel;

}

function processIndex(index, images) {

  // console.log(document.querySelector('.carousel-container img:nth-of-type(' + (index + 1) + ')'));

  // images[index].style.transform = 'translateX(-' + index + '00%';

  // document.querySelector('.carousel-container img:nth-of-type(' + (index + 1) + ')').style.transform = 'translateX(-' + index + '00%';
  // document.querySelector('.carousel-container').style.transform = '-' + index + '00%';

  images[index].style.width = '100%';
  // images[index].style.display = 'block';
  // images[index].style.opacity = '1';

  for (var i = 0; i < images.length; i++) 
    if (i != index) {
      // images[i].style.transform = 'translateX(100%);';
      images[i].style.width = '0%';
      // images[i].style.display = 'none';
    }

  // switch(index) {

  //   case 0:

  //     images[0].style.display = 'block';
  //     images[0].style.display = 'none';
  //     images[0].style.display = 'none';
  //     images[0].style.display = 'none';
  //     break;

  //   case 1:

  //     images[0].style.display = 'none';
  //     images[0].style.display = 'block';
  //     images[0].style.display = 'none';
  //     images[0].style.display = 'none';
  //     break;

  //   case 2:

  //     images[0].style.display = 'none';
  //     images[0].style.display = 'none';
  //     images[0].style.display = 'block';
  //     imgFour.style.display = 'none';
  //     break;

  //   case 3:

  //     imgOne.style.display = 'none';
  //     imgTwo.style.display = 'none';
  //     imgThree.style.display = 'none';
  //     imgFour.style.display = 'block';
  //     break;

  // }

}

document.querySelector('.carousel-container').appendChild(carousel());
