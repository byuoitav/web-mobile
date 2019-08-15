import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonToggleModule, MatBottomSheetModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NumpadComponent } from './popups/numpad/numpad.component';
import { RoomControlComponent } from './components/room-control/room-control.component';
import { APIService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { IOButtonComponent } from './components/io-button/io-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NumpadComponent,
    RoomControlComponent,
    IOButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    HttpClientModule
  ],
  providers: [
    APIService
  ],
  entryComponents: [
    NumpadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
