import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/**
 * firebase modules
 */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/**
 * NgRx modules
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/**
 * Reducers and Effects
 */
import {
  Auth,
  PageHeader,
  Sidebar,
  SidebarEffects,
  Utils
} from '@angular-cm/sys-utils';

/**
 * forms and formly modules
 */
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

/**
 * library modules (src/libs/**)
 */
import { UiAuthModule } from '@angular-cm/ui-auth';
import { UiGlobalModule } from '@angular-cm/ui-global';
import { UiContentModule } from '@angular-cm/ui-content';
import { UiMaterialModule } from '@angular-cm/ui-material';

/**
 * components imports and others
 */
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot({
      auth: Auth,
      sidebar: Sidebar,
      pageHeader: PageHeader,
      utils: Utils
    }),
    EffectsModule.forRoot([
      SidebarEffects
    ]),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    UiAuthModule,
    UiGlobalModule,
    UiContentModule,
    UiMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
