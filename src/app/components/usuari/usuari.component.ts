import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuari',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuari.component.html',
  styleUrl: './usuari.component.css'
})
export class UsuariComponent {

  nom! : string;
  email! : string;
  password! : string;
  repeatpassword! : string;
  idioma! : string;
  condicions! : string;
  
  submit () {
    console.log('Nom:', this.nom, 'Email:', this.email, 'Password:', this.password, 'Repeat:', this.repeatpassword, 
    'idioma:', this.idioma, 'Condicions acceptades:', this.condicions);
  }

}
