export class WorkModel {
  constructor(
    public title: string,
    public description: string,
    public imgUrl: string,
    public technologies: string[],
    public codeUrl: string,
    public demoUrl: string
  ) {}
}
