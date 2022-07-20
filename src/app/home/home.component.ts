import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigationLink(name: string) {
    document.getElementById(name)!.scrollIntoView({behavior: 'smooth'});
  }
}
