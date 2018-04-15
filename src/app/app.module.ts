import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DogListComponent} from './dogs/dog-list/dog-list.component';
import {DogItemComponent} from './dogs/dog-list/dog-item/dog-item.component';
import {HeaderComponent} from './header/header.component';
import {MatListModule, MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogItemComponent,
    HeaderComponent,
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
