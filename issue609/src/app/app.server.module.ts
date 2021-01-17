import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { NgxExtendedPdfViewerServerModule } from 'ngx-extended-pdf-viewer';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NgxExtendedPdfViewerServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
