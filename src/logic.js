import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

function Image(id, path) {
  this.id = id;
  this.path = path;
  this.active = false;
}

const images = [
  new Image(1, img1),
  new Image(2, img2),
  new Image(3, img3),
  new Image(4, img4),
  new Image(5, img5),
];

const imageToActive = (id) => {
  images.forEach((image) => {
    if (image.id == id) {
      image.active = true;
    } else {
      image.active = false;
    }
  });
};

const incrementActive = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].active == true) {
      if (i == images.length - 1) {
        images[i].active = false;
        images[0].active = true;
      } else {
        images[i + 1].active = true;
        images[i].active = false;
      }
      return;
    }
  }
};

const decrementActive = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].active == true) {
      if (i == 0) {
        images[i].active = false;
        images[images.length - 1].active = true;
      } else {
        images[i - 1].active = true;
        images[i].active = false;
      }
      return;
    }
  }
};

export { images, imageToActive, incrementActive, decrementActive };
