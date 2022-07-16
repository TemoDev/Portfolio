import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import gsap from 'gsap';
let navTl = gsap.timeline({ paused: true });

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

  constructor() {}

  ngOnInit(): void {
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
    // Toggles collapsed navabar on small screens
    // this.nav.nativeElement.classList.toggle('nav-links--visible');
    this.navBtn.nativeElement.classList.toggle('burger-line--active');
    navTl.paused() || navTl.reversed() ? navTl.play() : navTl.reverse('-=0.4');
  }
}