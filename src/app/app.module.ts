import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DogListComponent} from './dogs/dog-list/dog-list.component';
import {DogItemComponent} from './dogs/dog-list/dog-item/dog-item.component';
import {HeaderComponent} from './header/header.component';
import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
