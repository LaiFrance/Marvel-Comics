import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 nome!: string;
 email!: string;
 senha!: number;

  transferir(){
console.log('Solicitada nova transferência');
console.log('Nome: ', this.nome);
console.log('Email: ', this.email);
console.log('Senha: ', this.senha);
}

}
