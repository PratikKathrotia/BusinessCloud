import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { UiGlobalModule } from '@angular-cm/ui-global';
import { UiMaterialModule } from '@angular-cm/ui-material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiGlobalModule,
    UiMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
