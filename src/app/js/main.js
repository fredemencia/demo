/**
 * MODULES
 */
import { navbuilder } from './utils/navigation.js'
import { convertImages } from './modules/_svginline.js'
import Splide from '@splidejs/splide';
import LocomotiveScroll from 'locomotive-scroll';

import { gsap, ScrollTrigger,ScrollToPlugin,TweenMax,TimelineMax, MotionPathPlugin,CSSRulePlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,TimelineMax,TweenMax,MotionPathPlugin,CSSRulePlugin);

//Vue.use(VueSplide)

/**
 * Files (webpack importation)
 */
//import '../../favicon.png' // import favicon file
/**
 * Run the application
 */
const run = () => {
  navbuilder();
  convertImages('img.is-svg');

}

document.addEventListener( 'DOMContentLoaded', function () {

  var eventslider = document.querySelector('#splide') !== null;
  var partnersslider = document.querySelector('.splide-part') !== null;


});


/////////////////
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");



/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});



scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {

  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  // Pinning and horizontal scrolling


  const mql = window.matchMedia('(min-width: 1024px)');

  new Splide( '#splide', {
    type       : 'fade',
    // heightRatio: 0.5,
    pagination : true,
    arrows     : true,
    cover      : true,
    autoplay:true
  }).mount();

  let tlh = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      trigger: ".hero-area",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom center", // end after scrolling 500px beyond the start
      scrub: 0.2,
      pin: true,

    }
  });

  tlh.from(".fullslider", {y:120,scale: 0.5,  transformOrigin: "center bottom",autoAlpha: 0.9, ease: "none"},0)
  .to(".fullslider", {y: innerHeight * -0.1,scale: 1,} )
   .addLabel("fullok");

  gsap.to("#text__fade", {
    scrollTrigger: {
      scroller: pageContainer,
      trigger: ".is-navagora",
      start: "+=10",
      end: "+=50",
      toggleActions: "play  resume reverse reset"
    },
    duration: 0.5,
    opacity: "0",
    ease: "none"
  });



  let height = window.innerHeight;
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      scroller: pageContainer,
      trigger: ".triggerslidecontent",
      start: "top top",
      end:"bottom top",
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //markers: true,

    },
    duration: 0.5,
    opacity: "0",
    ease: "none"
  });

// add animations and labels to the timeline
  tl.addLabel("start")
    .from(".splide__slide__text", { autoAlpha: 0,y: '100%'})
    .to(".splide__slide__text", {autoAlpha: 1})

  ScrollTrigger.matchMedia({
    "(max-width: 959px)": () => {

    },
    "(min-width: 960px)": () => {}
  });



  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();


});

//////

////slice crossfade
var arrImg = []
var imgs = document.getElementsByClassName('slideImg')
for (var i = 0; i < imgs.length; i++) {
  var imgx = imgs[i];
  arrImg.push(imgx);
};
var next = 5; // time to change

function crossfade(){

  var action = new TimelineMax()
    .to(arrImg[0], 1, {autoAlpha:0})
    .to(arrImg[1], 1, {autoAlpha:1},0)

  arrImg.push( arrImg.shift() );
  // start endless run
  TweenMax.delayedCall(next, crossfade);
}
gsap.set(arrImg[0], {opacity: 0});
// start the crossfade after next = 3 sec
TweenMax.delayedCall(next, crossfade);

//////


run()


