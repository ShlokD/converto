import Controller from './classes/controller.js'

const init = () => {
  const controller = new Controller();
  controller.init();
}
window.addEventListener('load', init);