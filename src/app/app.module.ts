import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AirlinePassengerComponent } from './shared/component/airline-passenger/airline-passenger.component';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { AirlineCardsComponent } from './shared/component/airline-cards/airline-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlinePassengerComponent,
    AirlineCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
