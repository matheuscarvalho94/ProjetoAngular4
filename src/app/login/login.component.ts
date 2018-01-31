import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Usuario } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  Mensagemhide;
  LoginForm: FormGroup;
  usuario: Usuario = new Usuario();
  BoxEsqueci = false;
  BoxLogin = true;
  erroMsg = false;
  MensagemError: string;
  msgdesc: string;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,

  ) {
    this.LoginForm = fb.group({
      'senha': ['', [Validators.required, Validators.minLength(5)]],
      'email': ['', Validators.email],
    });
  }

  valid() {
    if (this.LoginForm.controls.email.invalid) {
      return 'E-mail';
    } else if (this.LoginForm.controls.senha.invalid) {
      return 'Senha';
    }
    return true;
  }
  ngOnInit() {
    this.authService.erroMsg.subscribe(
      mostrar => this.erroMsg = mostrar,
    );
    this.authService.MensagemError.subscribe(
      mostrar2 => this.MensagemError = mostrar2,
    );
  }

  doLogin(form) {
    const mensagem = this.valid();
    if ( mensagem === true ) {
      this.authService.loginUser(this.usuario);
    } else {
     this.Mensagemhide = true;
     this.msgdesc = 'É necessário informar seus dados.';
    }
  }

  ChangeBox () {
    this.BoxLogin = false;
    this.BoxEsqueci = true;
  }

  esqueciSenha() {
    this.BoxEsqueci = false;
    this.BoxLogin = true;
    alert('Em instantes você receberá um e-mail.');
  }
}
