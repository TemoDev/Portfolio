import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { gsap } from 'gsap';
let navTl = gsap.timeline({ paused: true });
let navIntroTl = gsap.timeline();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navWrapper', { static: true })
  navWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('nav', { static: true })
  nav!: ElementRef<HTMLDivElement>;
  @ViewChild('navBtn') navBtn!: ElementRef<HTMLDivElement>;
  @ViewChild('navContainer', { static: true }) navContainer!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.navIntroAnimation();
    navTl
      .to(this.navWrapper.nativeElement, {
        height: '100vh',
        'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      })
      .from(
        this.nav.nativeElement.childNodes,
        {
          y: '100%',
          opacity: 0,
          stagger: 0.1,
        },
        '-=0.3'
      );
  }

  toggleNav() {
    this.navBtn.nativeElement.classList.toggle('burger-line--active');
    navTl.paused() || navTl.reversed() ? navTl.play() : navTl.reverse('-=0.4');
  }

  navigationLink(name: string) {
    document.getElementById(name)!.scrollIntoView({behavior: 'smooth'});
  }

  // Nav animation when page loads
  navIntroAnimation() {
    navIntroTl
      .from(this.navContainer.nativeElement, {
        y: "-100%",
        duration: 1.5,
        ease:"Power4.easeOut"   
      })
  }

}
