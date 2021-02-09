import Splide from '@splidejs/splide';

export function splidehome (item) {
  var events = document.querySelector('.events-slider') !== null;
  var partners = document.querySelector('.part-logo-sliderr') !== null;
  if (events) {
     new Splide( '.events-slider', {
      type      : 'loop',
      perPage   : 3,
      cover     : true,
      breakpoins: {
        640: {
          height: '6rem',
        }
      }
    } ).mount();
  }
}
