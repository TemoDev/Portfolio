import { Injectable } from '@angular/core';
import { WorkModel } from './work.model';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  constructor() {}

  works: WorkModel[] = [
    new WorkModel(
      'Zilta',
      `Website for ventilation systems and accessories.`,
      '../../assets/zilta.jpg',
      [ 'HTML', 'SCSS', 'Javascript','Wordpress', 'Bootstrap'],
      '',
      'https://zilta.ge/'
    ),
    new WorkModel(
      'Hydrogeology',
      `Multipage website.`,
      '../../assets/hydrogeology.jpg',
      [ 'HTML', 'SCSS', "Javascript"],
      '',
      'https://hydrogeology.ge/'
    ),
    new WorkModel(
      'Film Info',
      `Angular based project, which is using TMDB API for fetching different movie's data. Project includes Firebase Authentication and Realtime Database for storing movies in watchlist.`,
      '../../assets/filminfo.jpg',
      [ 'Angular', 'HTML', 'SCSS', 'Typescript', 'Firebase', 'Bootstrap'],
      'https://github.com/TemoDev/Film-Info',
      ''
    ),
    new WorkModel(
      'Bose',
      'Bose concept website with beautiful GSAP animations and fully responsive on all device screens.',
      '../../assets/bose-1.jpg',
      [ 'HTML', 'SCSS', 'Javascript', 'GSAP' , 'Bootstrap'],
      'https://github.com/TemoDev/Bose-concept-website',
      'https://temodev.github.io/bose/'
    ),
    new WorkModel(
      'Lexus Website',
      'Lexus concept car website built with Angular framework.',
      '../../assets/lexus-1.jpg',
      ['Angular', 'HTML', 'SCSS', 'Typescript', 'GSAP', 'Bootstrap'],
      'https://github.com/TemoDev/lexus-concept-website',
      ''
    ),
    new WorkModel(
      'Weather',
      'Weather app using Openweathermap API and Pexels API for generating location specific background images.',
      '../../assets/weather.jpg',
      ['HTML', 'SCSS', 'Javascript'],
      'https://github.com/TemoDev/TemoDev.github.io/tree/master/Weather%20App',
      'https://temodev.github.io/Weather%20App/'
    ),
  ];

  getWorks() {
    return this.works.slice();
  }
}
