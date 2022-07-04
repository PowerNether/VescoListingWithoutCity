$(".sorting__view").on("click tap", function () {
  $(".sorting__view").removeClass("active");
  $(this).addClass("active");
});

$(".sorting__quantites").on("click tap", function () {
  $(".sorting__quantites").removeClass("active");
  $(this).addClass("active");
});

// $("select").formSelect();
// $(".tabs").tabs();
let pageTabs = document.querySelector('.pageTabs__list') || null;
if (pageTabs !== null) {
  let tabs__tab = Array.from(pageTabs.querySelectorAll('.pageTabs__tab')) || null;
  let tabs__line = pageTabs.querySelector('.pageTabs__line') || null;
  if (tabs__tab !== null && tabs__line !== null) {
    tabs__tab.forEach(tab => {
      if (tab.classList.contains('active')) {
        tabs__line.style.width = tab.offsetWidth + 'px';
        tabs__line.style.left = tab.offsetLeft + 'px';
      }
      tab.addEventListener('click', function () {
        tabs__tab.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        tabs__line.style.width = tab.offsetWidth + 'px';
        tabs__line.style.left = tab.offsetLeft + 'px';
      })
    })
  }
}

let detail__tabs = document.querySelector('.detail__tabs') || null;
if (detail__tabs !== null) {
  let tabs__tab = Array.from(detail__tabs.querySelectorAll('.detail__tab')) || null;
  let tabs__line = detail__tabs.querySelector('.detail__line') || null;
  if (tabs__tab !== null && tabs__line !== null) {
    tabs__tab.forEach(tab => {
      if (tab.classList.contains('active')) {
        tabs__line.style.width = tab.offsetWidth + 'px';
        tabs__line.style.left = tab.offsetLeft + 'px';
      }
      tab.addEventListener('click', function () {
        tabs__tab.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        tabs__line.style.width = tab.offsetWidth + 'px';
        tabs__line.style.left = tab.offsetLeft + 'px';
      })
    })
  }
}

// $(".tabs").tabs();

$(".detail-toggle").on("click", function() {
  $(this).toggleClass("rotate");
  $(this).parent().parent().parent().parent().find(".item__detail").slideToggle();
  $(this).parent().parent().parent().parent().find('.detail__line').css('width', $(this).parent().parent().parent().parent().find('.detail__tab.active').width() + 'px');
  $(this).parent().parent().parent().parent().find('.detail__line').css('left', $(this).parent().parent().parent().parent().find('.detail__tab.active').position().left + 40 + 'px');
})
$(".detail__close").on("click", function() {
  $(this).parent().parent().parent().find(".item__detail").slideToggle()
  $(this).parent().parent().parent().find(".detail-toggle").toggleClass("rotate")
})
$(".sidebarMenu__item").on("click tap", function (e) {
  e.preventDefault();
  $(this).parent().children().removeClass("sidebarMenu__item-active");
  $(this).addClass("sidebarMenu__item-active");
  let tab = $(this).attr("href");
  $(this).parent().parent().children().removeClass("siderbarTab-active");
  $(this).parent().parent().find(tab).addClass("siderbarTab-active");
});
$(".w-unhide").on("click tap", function (e) {
  e.preventDefault();
  let unhide = $(this).attr("href");
  $(this).parents().find(unhide).slideToggle();
  if ($(this).text() == "Показать") {
    $(this).text("Скрыть");
  } else {
    $(this).text("Показать");
  }
  $(this).parent().find("#w-arrow").toggleClass("w-rotate");
});

const selects = document.querySelectorAll('.select')

window.addEventListener('load', function () {
    Array.from(selects).forEach((el) => {
        $(el).selectric({
            nativeOnMobile: false
        });
        const label = el.parentNode.parentNode.querySelector('.label')
        const title = el.parentNode.parentNode.parentNode.querySelector('.title')
        const placeholder = el.parentNode.parentNode.querySelector('.placeholder')
        const select = el.parentNode.parentNode.querySelector('.selectric')
        const parent = el.parentNode.parentNode.parentNode;
        const amount = parent.querySelector('.amount') || null
        if (label.textContent === placeholder.textContent && !parent.classList.contains('default')) {
            label.style['color'] = '#808080'
            label.style['opacity'] = '0'
            title.style['top'] = '50%'
            title.style['font-size'] = '15px'
        }
        $(el).on('selectric-change', function () {
          if (!parent.classList.contains('default')) {
            if (label.textContent === placeholder.textContent) {
                label.style['color'] = '#808080'
                label.style['opacity'] = '0'
                title.style['top'] = '50%'
                title.style['font-size'] = '15px'
                select.style['border'] = '1px solid #CCCCCC'
                select.style['background'] = '#FFFFFF'
                amount.style.opacity = 0
            } else {
                if (amount !== null) {
                    amount.innerHTML = parent.querySelectorAll('.selected').length
                    amount.style.opacity = 1
                }
                label.style['color'] = '#333333'
                label.style['opacity'] = '1'
                title.style['top'] = '14px'
                title.style['font-size'] = '11px'
                select.style['border'] = '1px solid #00D26D'
                select.style['background'] = '#F0FAF5'
            }
          }
        })
    })
})

const inputReset = Array.from(document.querySelectorAll('.reset')) || null;

if (inputReset != null) {
  inputReset.forEach(reset => {
    reset.addEventListener('click', function() {
      this.parentNode.querySelector('input').value = ''
      if (this.parentNode.parentNode.classList.contains('price')) {
        const inputWrapper = this.parentNode.parentNode.querySelectorAll('.form-input') || null;
        const radioWrapper = this.parentNode.parentNode.querySelector('.form-radios') || null;
        if (inputWrapper === null) return
        inputWrapper.forEach(inputs => {
          const input = inputs.querySelector('input')
          if (input.value === '') {
            this.parentNode.parentNode.style['background'] = '#ffffff'
            const inputsWrappers = Array.from(this.parentNode.parentNode.querySelectorAll('.form-input')) || null;
            if (inputsWrappers !== null) {
              inputsWrappers.forEach(wrapper => {
                wrapper.querySelector('input').style['border'] = '1px solid #CCCCCC'
                wrapper.querySelector('input').style['border-right'] = 'none'
              })
            }
            if (radioWrapper !== null) {
              radioWrapper.style['border'] = '1px solid #CCCCCC'
              radioWrapper.style['border-left'] = 'none'
            }
            return;
          } else {
            this.parentNode.parentNode.style['background'] = '#EFFAF3'
            const inputsWrappers = Array.from(this.parentNode.parentNode.querySelectorAll('.form-input')) || null;
            if (inputsWrappers !== null) {
              inputsWrappers.forEach(wrapper => {
                wrapper.querySelector('input').style['border'] = '1px solid #39C568'
                wrapper.querySelector('input').style['border-right'] = 'none'
              })
            }
            if (radioWrapper !== null) {
              radioWrapper.style['border'] = '1px solid #39C568'
              radioWrapper.style['border-left'] = 'none'
            }
          }
        })
      }
    })
  })
}

const inputPrice = Array.from(document.querySelectorAll('.price')) || null;

if (inputPrice !== null) {
  inputPrice.forEach(price => {
    const inputsWrapper = Array.from(price.querySelectorAll('.form-input')) || null;
    const radioWrapper = price.querySelector('.form-radios') || null
    
    if (inputsWrapper === null) return

    inputsWrapper.forEach(inputs => {
      const input = inputs.querySelector('input')
      input.addEventListener('focus', function() {
        input.parentNode.parentNode.style['background'] = '#EFFAF3'
        const inputsWrappers = Array.from(input.parentNode.parentNode.querySelectorAll('.form-input')) || null;
        if (inputsWrappers !== null) {
          inputsWrappers.forEach(wrapper => {
            wrapper.querySelector('input').style['border'] = '1px solid #39C568'
            wrapper.querySelector('input').style['border-right'] = 'none'
          })
        }
        if (radioWrapper !== null) {
          radioWrapper.style['border'] = '1px solid #39C568'
          radioWrapper.style['border-left'] = 'none'
        }
      })
      input.addEventListener('blur', function() {
        if (input.value === '') {
          input.parentNode.parentNode.style['background'] = '#ffffff'
          const inputsWrappers = Array.from(input.parentNode.parentNode.querySelectorAll('.form-input')) || null;
          if (inputsWrappers !== null) {
            inputsWrappers.forEach(wrapper => {
              wrapper.querySelector('input').style['border'] = '1px solid #CCCCCC'
              wrapper.querySelector('input').style['border-right'] = 'none'
            })
          }
          if (radioWrapper !== null) {
            radioWrapper.style['border'] = '1px solid #CCCCCC'
            radioWrapper.style['border-left'] = 'none'
          }
        }
      })
    })
  })
}

let aroundSwipers = Array.from(document.querySelectorAll(".aroundSwiper")) || null;

if (aroundSwipers !== null) {
  aroundSwipers.forEach((slider) => {
    let sliderInstance = new Swiper(slider, {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 32,
      navigation: {
        prevEl: ".around__prev",
        nextEl: ".around__next",
      },
      scrollbar: {
        el: ".around-scrollbar",
        draggable: true,
      },
      breakpoints: {
        669: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 4,
        }
      }
    });
  });
}

let boxpreview = document.querySelector('.boxPreview-slider') || null;

if (boxpreview !== null) {
  let sliderInstance = new Swiper(boxpreview, {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints: {
      769: {
        slidesPerView: 2,
      }
    }
  });
  Array.from(boxpreview.getElementsByTagName('span')).forEach(img => {
    lightGallery(img, {
      // selector: '.custom-selector',
      download: false,
      licenseKey: "833B85C2-10294FE1-A3CD0C29-DF8BE7E5",
    });
  })
}