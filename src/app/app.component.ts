import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { AnimaisService } from './shared/services/animais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ProjetoZup';

  mostrarMenu: boolean;
  searchText
  constructor(
    private authService: AuthService,
    private AnimaisService: AnimaisService) { }
  
  ngOnInit() {
    this.authService.showMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.AnimaisService.emitSearch.subscribe(
      search => this.searchText = search
    );
  }

  doLogout(){
    this.authService.usuarioLogout();
  }


}
