import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material';

import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { LayoutLandingComponent } from './landing-page/landing.component';
import { LogInComponent } from './log-in-page/log-in.component';
import { HelloComponent } from './hello-layout/hello.component';
import { HeaderComponent } from './header-layout/header.component';
import { RegistrationComponent } from './registration-page/registration.component';
import { UserService } from './user.service';
import { BoardPageComponent } from './board-page/board-page.component';
import { BoardLayoutComponent } from './board-layout/board-layout.component';
import { ColumnLayoutComponent } from './column-layout/column-layout.component';
import { UserHeaderLayoutComponent } from './user-header-layout/user-header-layout.component';
import { TaskLayoutComponent } from './task-layout/task-layout.component';
import { Column } from './column-layout/column.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: LayoutLandingComponent },
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'board', component: BoardPageComponent }
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
    DragDropModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule.forRoot(appRoutes)// что бы применить маршруты
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LayoutLandingComponent,
    LogInComponent,
    HeaderComponent,
    HelloComponent,
    RegistrationComponent,
    BoardPageComponent,
    BoardLayoutComponent,
    ColumnLayoutComponent,
    UserHeaderLayoutComponent,
    TaskLayoutComponent,
    Column,
  ],
  entryComponents: [],
})
export class AppModule { }
