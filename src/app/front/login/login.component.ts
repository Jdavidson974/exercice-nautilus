import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  constructor(private router : Router) { }
  data : string[];

  // check si le form est valide puis redirige
  //TODO Faire un access securisé  
  onSubmit(f:NgForm){
    if(f.valid){
      console.log("Connecté")
      this.router.navigate(['/dashboard']);
    }else{
      console.log('Ko')
    }
  }
}
