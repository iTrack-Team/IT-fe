// import { Component} from '@angular/core';

// @Component({
//   selector: 'home',
//   template: `<h3>Home Page</h3>`
// })
// export class HomeComponent { }
import { Component } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  // template: `<div>
  // <nav>
  //     <a routerLink="">Главная </a>
  //     <a routerLink="/register">Join Us</a>
  //     <a routerLink="/login">Log In</a>
  // </nav>

  // <div class="hello_app">
  //   <pre> 
  //     What are you waiting for?
  //     Sign up and become
  //     one of the millions of people around the world
  //     who have fallen in love with iTrack.
  //   </pre>  
  // </div>


  // <router-outlet></router-outlet>
  // </div>`

})

export class HomeComponent {
  title = 'iTrack';
}
