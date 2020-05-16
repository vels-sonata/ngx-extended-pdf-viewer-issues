import { Component } from '@angular/core';

declare const viewer: HTMLDivElement;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public windowWidth = window.innerWidth;
  public windowHeight = window.innerHeight;

  public blocPdfViewerOpened = true;
  public blocFilterOpened = true;

  public currentPage = 0;

  public visible = true;

  constructor() {}

  getAnnotateHeight() {
    return this.windowHeight - 60;
  }

  getPdfViewerAnnotateWidth() {
    return (this.windowWidth - (this.blocFilterOpened ? 300 : 0) - 250) * 0.4;
  }

  getShowModal() {
    return true;
  }

  getdocumentToShow() {
    this.currentPage = 1;
    return 'assets/Portugues-para-principiantes-1538054164.pdf';
  }

  isParagraphe() {
    return this.visible;
  }

  getSrcDocument() {
    this.currentPage = 1;
    return 'assets/Portugues-para-principiantes-1538054164.pdf';
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }
}
