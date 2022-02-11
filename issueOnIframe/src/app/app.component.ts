import { Component, AfterContentInit, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  public height = 'calc(50vh - 120px)';


	private _pdfAssets1 = 'assets/themes_de_la_Science-fiction.pdf';
	private _pdfAssets2 = 'assets/Portugues-para-principiantes-1538054164.pdf';
  srcUrl: string;

	constructor(private changeDetectorRef: ChangeDetectorRef) { 
    pdfDefaultOptions.assetsFolder = 'assets/pdf-viewer';
  }
  
  ngAfterViewInit(): void {
    this.srcUrl = this._pdfAssets2
  }

  ngOnInit() {
		
	}

  public ngAfterContentInit(): void {
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }

    // setTimeout(() => {
		// 	this.srcUrl = this._pdfAssets2;
		// 	this.changeDetectorRef.detectChanges();
		// }, 5000);

  }
}
