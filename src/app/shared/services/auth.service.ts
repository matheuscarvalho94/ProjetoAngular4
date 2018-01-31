import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models';


@Injectable()
export class AuthService {
  private userAutenticado:boolean = false; 
  showMenu = new EventEmitter<boolean>();
  erroMsg  = new EventEmitter<boolean>();
  MensagemError = new EventEmitter<any>();

  constructor(
    private router: Router,
  ) {
  
  }

  loginUser(usuario: Usuario) {
    this.userAutenticado = true;
    this.showMenu.emit(true);
    this.router.navigate(['/home']);
    localStorage.setItem('Dados', JSON.stringify(usuario));
  }

  usuarioAuth() {
    if(localStorage.getItem('Dados')){
      this.showMenu.emit(true);
      return true
    }else{
      return false;
    }
  }

  usuarioLogout(){
    localStorage.removeItem('Dados')
    this.showMenu.emit(false);
    this.router.navigate(['/login']);
    return false;
  }

}
