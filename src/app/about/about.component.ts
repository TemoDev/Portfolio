import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Imports for scroll animation
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

  // About Section Intro Timeline
  const aboutAnimation = gsap.timeline({ 
    scrollTrigger: {
      trigger: document.getElementById('about'),
      toggleActions: 'play none none none'
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
  }

  aboutIntroAnimation() {
    aboutAnimation
      .from(this.aboutIntroTitle.nativeElement, { 
        opacity: 0,
        y: '100%',
        duration : 1,
        delay: 0.7
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
        y: '100%',
        duration : 1.2,
        stagger: 0.3
      }, "-=0.7")
  }

}
