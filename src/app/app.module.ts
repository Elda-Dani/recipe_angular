import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewallComponent } from './viewall/viewall.component';

const approutes:Routes=[
  {
    path:"",component:AddrecipeComponent
  },
  {
    path:"view",component:ViewallComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddrecipeComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
