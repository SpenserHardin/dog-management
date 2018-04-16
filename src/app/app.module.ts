import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatListModule, MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DogsComponent } from './dogs/dogs.component';
import { DogContentComponent } from './dogs/dog-content/dog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DogsComponent,
    DogContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
