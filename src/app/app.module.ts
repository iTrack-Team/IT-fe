import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home.component';
import { RegistrationComponent } from './pages/registration-page/registration.component';
import { LogInComponent } from './pages/log-in-page/log-in.component';
 
'@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } 
from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'registrate', component: RegistrationComponent},
  { path: 'login', component: LogInComponent }
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
    RouterModule.forRoot(appRoutes)// что бы применить маршруты
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [ AppComponent, 
    HomeComponent, 
    RegistrationComponent, 
    LogInComponent]
})
export class AppModule { }




// import { ReactiveFormsModule }    from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// import { routing }        from './app.routing.module';


// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';

// @NgModule({
//     imports: [
//         BrowserModule,
//         ReactiveFormsModule,
//         HttpClientModule,
//         routing
//     ],
//     declarations: [
//         AppComponent,
//         AlertComponent,
//         HomeComponent,
//         LoginComponent,
//         RegisterComponent
//     ],
//     providers: [
//         AuthGuard,
//         AlertService,
//         AuthenticationService,
//         UserService,
//         { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//         { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

//         // provider used to create fake backend
//         fakeBackendProvider
//     ],
//     bootstrap: [AppComponent]
// })
