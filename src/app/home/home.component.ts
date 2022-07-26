import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
const introTl = gsap.timeline();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('introContent', {static: true}) introContent!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.introAnimation();
  }

  navigationLink(name: string) {
    document.getElementById(name)!.scrollIntoView({behavior: 'smooth'});
  }

  // Intro animation on load
  introAnimation() {
    introTl
      .from(this.introContent.nativeElement, {
        y: '20%',
        opacity: 0,
        delay: 1,
        duration: 1.5,
        ease: "Power4.easeOut"
      })
  }

}
