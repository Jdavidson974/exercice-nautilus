import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl:'app-component.html' ,

})
export class AppComponent {
  title = 'exercice-nautilus';

  constructor(private router : Router) {}

  // Redirection
  goToLogin(){
    this.router.navigate(['/login']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }
}
