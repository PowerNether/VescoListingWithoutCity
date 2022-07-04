function getGalleryItems (el) {
  let galleryImagesImg = Array.from(el.getElementsByTagName("img"));
  let galleryImages = [];

  galleryImagesImg.forEach((img) => {
      let src = img.getAttribute("data-gfo");
      galleryImages.push({ src: src, thumb: src });
  });

  return galleryImages
}

function lightSwiper () {

    let sliders = Array.from(document.getElementsByClassName("slider-main"));

    sliders.forEach((el) => {
        let options = {
            preloadImages: false,
            lazy: { loadPrevNext: 2 },
            loop: true,
            grabCursor: true,
            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: true,
            },
        };
        let galleryImages = getGalleryItems(el);
        let sliderSlides = el.querySelectorAll(".swiper-slide") || null;

        let galleryInstance = lightGallery(el, {
            download: false,
            dynamic: true,
            dynamicEl: galleryImages,
            licenseKey: '833B85C2-10294FE1-A3CD0C29-DF8BE7E5',
        });

        let sliderMain = new Swiper(el, options);
        
        Array.from(sliderSlides).forEach((slide) => {
          slide.addEventListener("click", () => { galleryInstance.openGallery() })
        })
    });
}

lightSwiper();