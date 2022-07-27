import { Component } from '@angular/core';

// Smooth Scroll 
// import Lenis from '@studio-freight/lenis'

// const lenis = new Lenis({
//   lerp: 0.1,
//   smooth: true,
//   direction: 'vertical',
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}

// smooth scrolling
/*
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: 'vertical',
})

//get scroll value
lenis.on('scroll', ({ scroll, limit }) => {
  console.log({ scroll, limit })
})

function raf() {
  lenis.raf()
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
*/