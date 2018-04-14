import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DogListComponent} from './dogs/dog-list/dog-list.component';
import {DogItemComponent} from './dogs/dog-list/dog-item/dog-item.component';
import {MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DogListComponent,
        DogItemComponent,
        HeaderComponent
      ],
      imports: [
        BrowserModule,
        MatListModule
      ]
    });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
