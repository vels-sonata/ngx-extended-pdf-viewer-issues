import { Component } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue813-path-plus-iframe';

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
}
