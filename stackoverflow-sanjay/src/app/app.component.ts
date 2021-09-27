import { Component, AfterContentInit, NgZone } from '@angular/core';
import { ScrollModeType } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  public height = 'calc(50vh - 120px)';

  //  public scrollMode = ScrollModeType.horizontal;

  private _scrollMode = ScrollModeType.horizontal;

  public get scrollMode(): ScrollModeType {
    return this._scrollMode;
  }

  public set scrollMode(mode: ScrollModeType) {
    this.ngZome.run(() => (this._scrollMode = mode));
  }

  constructor(private ngZome: NgZone) {}

  public ngAfterContentInit(): void {
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }
  }
}
