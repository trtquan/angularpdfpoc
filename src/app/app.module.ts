import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import {PrintService} from './print.service';
import { CDCComponent } from './cdc/cdc';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    CDCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
