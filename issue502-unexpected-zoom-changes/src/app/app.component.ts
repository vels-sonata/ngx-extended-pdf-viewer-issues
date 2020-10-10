import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  public _zoomSetting: number | string | undefined = 'auto';

  public height = 'calc(50vh - 120px)';

  public ngAfterContentInit(): void {
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }
  }

  public resetZoom(): void {
    this._zoomSetting = '125%';
    console.log("click");
  }
}
