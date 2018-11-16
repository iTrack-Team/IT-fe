import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutLandingComponent } from './landing-page/landing.component';
import { LogInComponent } from './log-in-page/log-in.component';
import { HelloComponent } from './hello-layout/hello.component'

'@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule }
from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header-layout/header.component';
import { RegistrationComponent } from './registration-page/registration.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: LayoutLandingComponent},
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent },
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
  ]
})
export class AppModule { }
