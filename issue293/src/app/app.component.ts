import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  public height = 'calc(50vh - 120px)';

  public ngAfterContentInit(): void {
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }
  }

  public onZoomChange(event: string | number): void {
    console.log('User changed the zoom to ' + event);
  }

  public onCurrentZoomFactor(event: string | number): void {
    console.log('Current zoom factor:' + event);
  }
}
