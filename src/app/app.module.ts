import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutLandingComponent } from './landing-page/landing.component';
import { LogInComponent } from './log-in-page/log-in.component';
import { CreateBoardComponent } from './create-board-page/create-board.component';
import { HelloComponent } from './hello-layout/hello.component';


import '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header-layout/header.component';
import { RegistrationComponent } from './registration-page/registration.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: LayoutLandingComponent},
  { path: 'login', component: LogInComponent },
  // { path: 'logout', component: LogOutComponent },// todo
  { path: 'registration', component: RegistrationComponent },
  { path: 'create-board', component: CreateBoardComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)// что бы применить маршруты
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LayoutLandingComponent,
    LogInComponent,
    HeaderComponent,
    HelloComponent,
    RegistrationComponent,
    CreateBoardComponent,
  ]
})
export class AppModule { }
