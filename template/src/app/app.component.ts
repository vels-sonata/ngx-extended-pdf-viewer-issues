import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { IPDFViewerApplication } from 'ngx-extended-pdf-viewer';

declare const viewer: HTMLDivElement;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  public height = '50vh';

  public ngAfterContentInit(): void {
    //    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
    const PDFViewerApplication: any = (window as any).PDFViewerApplication;
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }
  }
}
