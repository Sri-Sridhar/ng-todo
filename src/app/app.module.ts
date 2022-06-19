import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { MainSectionComponent } from './main-section/main-section.component';
import { AddTaskPopupComponent } from './add-task-popup/add-task-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletedSnackbarComponent } from './deleted-snackbar/deleted-snackbar.component';

@NgModule({
  declarations: [	
    AppComponent,
    MainSectionComponent,
    AddTaskPopupComponent,
      DeletedSnackbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
