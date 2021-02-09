import Shuffle from 'shufflejs';

export function shuffleit (item) {
  var shufcontainer = document.querySelector('.shuffle-wrapper') !== null;
  if (shufcontainer) {
    const shuffleInstance = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item'
    });
  }
}
