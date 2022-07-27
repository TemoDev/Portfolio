import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { WorkModel } from '../shared/work.model';
import { WorksService } from '../shared/works.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  @ViewChild('workCircle1', {static: true}) workCircle1!: ElementRef<HTMLDivElement>;
  @ViewChild('workCircle2', {static: true}) workCircle2!: ElementRef<HTMLDivElement>;
  @ViewChild('workSection', {static: true}) workSection!: ElementRef<HTMLDivElement>;
  
  workArr: WorkModel[] = [];

  constructor(private works: WorksService) {}

  ngOnInit(): void {
    this.workArr = this.works.getWorks();

    // Blurred elements following this section on scroll
    gsap.to(this.workCircle1.nativeElement, {
      top: '50%',
      scrollTrigger: {
        trigger : this.workSection.nativeElement,
        start: 'top center-=20%',
        end: 'bottom bottom',
        toggleActions: "play none none reset",
        scrub: true
      }
    });
    gsap.to(this.workCircle2.nativeElement, {
      scrollTrigger: {
        trigger : this.workSection.nativeElement,
        start: 'top 100%-=400',
        end: 'bottom bottom+=400',
        pin: this.workCircle2.nativeElement,
        toggleActions: "play none none reset",
      }
    });

    // General content animation
    gsap.from(document.querySelector('.portfolio-title'), {
        y: '100%',
        opacity: 0,  
        duration: 1,
        ease: "Power2.easeInOut",
        scrollTrigger: {
          trigger: document.querySelector('.work'),
          toggleActions: 'play none none none',
        }
      })
    }
}
