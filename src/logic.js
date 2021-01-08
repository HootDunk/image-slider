function Image(id, path) {
  this.id = id;
  this.path = path;
  this.active = false;
}

const images = [
  new Image(1, "assets/img1.jpg"),
  new Image(2, "assets/img2.jpg"),
  new Image(3, "assets/img3.jpg"),
  new Image(4, "assets/img4.jpg"),
  new Image(5, "assets/img5.jpg"),
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
