import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  public height = 'calc(50vh - 120px)';

  public ngAfterContentInit(): void {
    if (typeof document !== 'undefined') {
      const toolbar = document.getElementsByClassName('zoom')[0];
      if (toolbar) {
        const top = 8 + toolbar.getBoundingClientRect().top;
        this.height = `calc(100vh - ${top}px)`;
      }
    }
  }
}
