import { Component, AfterContentInit } from '@angular/core';
import { PageNumberChange } from '../../../../ngx-extended-pdf-viewer/projects/ngx-extended-pdf-viewer/src/lib/events/page-number-change';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public onPageChange(event: PageNumberChange): void {
    console.log(event);
  }
}
