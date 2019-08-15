import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonToggleModule, MatBottomSheetModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NumpadComponent } from './popups/numpad/numpad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NumpadComponent
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
    MatBottomSheetModule
  ],
  providers: [],
  entryComponents: [
    NumpadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
