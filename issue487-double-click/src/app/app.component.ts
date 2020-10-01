import { Component, AfterContentInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  public height = 'calc(50vh - 120px)';

  public src = {
    url: 'assets/Portugues-para-principiantes-1538054164.pdf',
    originalUrl: 'assets/Portugues-para-principiantes-1538054164.pdf',
  };

  constructor() {
    // pdfDefaultOptions.disableStream = true;
    // pdfDefaultOptions.disableAutoFetch = true;
  }

  public ngAfterContentInit(): void {
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }
  }

  public onClick(): void {
    this.src = {
      url: 'assets/Portugues-para-principiantes-1538054164.pdf',
      originalUrl: 'assets/Portugues-para-principiantes-1538054164.pdf',
    };
  }
}
