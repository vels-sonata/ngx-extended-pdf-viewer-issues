import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppCommonModule } from './app.common.modul';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppCommonModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
