import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PdfhipsterSharedModule } from 'app/shared/shared.module';
import { PdfhipsterCoreModule } from 'app/core/core.module';
import { PdfhipsterAppRoutingModule } from './app-routing.module';
import { PdfhipsterHomeModule } from './home/home.module';
import { PdfhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PdfhipsterSharedModule,
    PdfhipsterCoreModule,
    PdfhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PdfhipsterEntityModule,
    PdfhipsterAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class PdfhipsterAppModule {}
