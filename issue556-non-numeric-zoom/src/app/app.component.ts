import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public pdfZoom: number | string | undefined = 'page-fit';
  public source: string;
  public firstPDF = '/assets/Portugues-para-principiantes-1538054164.pdf';
  public secondPDF = '/assets/themes_de_la_Science-fiction.pdf';

  constructor() {
    this.source = this.firstPDF;
  }
}
