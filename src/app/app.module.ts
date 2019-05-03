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

/**
 * NgRx modules
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/**
 * Reducers and Effects
 */
import {
  Sidebar,
  SidebarEffects
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
import { UiGlobalModule } from '@angular-cm/ui-global';
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
    StoreModule.forRoot({
      sidebar: Sidebar
    }),
    EffectsModule.forRoot([
      SidebarEffects
    ]),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    UiGlobalModule,
    UiMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
