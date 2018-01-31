import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Usuario } from '../../models';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  Mensagemhide:boolean
  LoginForm: FormGroup;
  usuario: Usuario = new Usuario()
  BoxEsqueci:boolean = false
  BoxLogin: boolean = true
  erroMsg: boolean = false
  MensagemError:string
  msgdesc:string
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,

  ) {
    this.LoginForm = fb.group({
      'senha': ['', [Validators.required, Validators.minLength(5)]],
      'email': ['', [this.EmailValidacao.bind(this)]],
    });
  }
 
  EmailValidacao(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'))) {
      return { invalidEmail: true };
    }
  }
  valid(){
    if (this.LoginForm.controls.email.invalid) {
      return "E-mail";
    }else 
    if (this.LoginForm.controls.senha.invalid) {
      return "Senha"
    }
    return true
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
    let mensagem = this.valid()
    if(mensagem==true){
      console.log(form)
      this.authService.loginUser(this.usuario);
    }else{
    //  alert("alt") 
     this.Mensagemhide=true
     this.msgdesc= "É necessário informar seus dados."
    }
  }

  ChangeBox(){
    console.log('Button esqueci senha')
    this.BoxLogin=false
    this.BoxEsqueci=true;
  }

  esqueciSenha(){
    this.BoxEsqueci=false;
    this.BoxLogin=true;
    alert('Em instantes você receberá um e-mail.')
  }
}
