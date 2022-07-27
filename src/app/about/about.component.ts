import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Imports for scroll animation
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

  // About Section Intro Timeline
  const aboutAnimation = gsap.timeline({ 
    delay: 0.7,
    ease: "Power1.easeIn",
    scrollTrigger: {
      trigger: document.getElementById('about'),
      toggleActions: 'play none none none',
    }
  });
  const aboutParallax = gsap.timeline({
    scrollTrigger: {
      trigger: document.querySelector('.about-img'),
      scrub: true
    }
  });

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // Elements which will be animated
  @ViewChild('aboutIntroTitle', { static: true }) aboutIntroTitle!: ElementRef<HTMLDivElement>;
  @ViewChild('about', { static: true }) about!: ElementRef<HTMLDivElement>;
  @ViewChild('aboutText', { static: true }) aboutText!: ElementRef<HTMLDivElement>;
  @ViewChild('aboutMeName', { static: true }) aboutMeName!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.aboutIntroAnimation();
    this.aboutScrollAnimation();
  }

  aboutIntroAnimation() {
    aboutAnimation
      .from(this.aboutIntroTitle.nativeElement, { 
        opacity: 0,
        y: '100%',
        duration : 1,
      })
      .to(this.aboutIntroTitle.nativeElement, { 
        opacity: 0,
        y: '-100%',
        duration : 1,
      })
      .from(document.querySelector('.about-title'), {
        opacity: 0,
        y: '100%',
        duration : 1,
      })
      .from(this.aboutMeName.nativeElement, {
        opacity: 0,
        y: '100%',
        duration : 1,
      }, "-=0.5")
      .from(this.aboutText.nativeElement.childNodes, {
        opacity: 0,
        y: '80px',
        duration : 1.2,
        stagger: 0.3
      }, "-=0.7")
      .from(document.querySelector('.about-img'), {
        "clip-path": "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }, "-=1.7")
      .from(document.querySelector('.about-img img'), {
        scale: 1.4,
        duration : 1.5,
        ease: "Power3.easeOut"
      }, "-=0.7")
      .from(document.querySelectorAll('.about-skills div'), {
        opacity: 0,
        y: '50%',
        duration : 1,
        stagger: 0.3
      }, "-=1.5")
  }
  aboutScrollAnimation() {
    aboutParallax
    .from(
      document.querySelector('.about-img'),{
        yPercent: -10,
        ease: "none",
      }
    ).to(document.querySelector('.about-img img'), {
      yPercent: 10,
      ease: "none",
    })
  }

}
