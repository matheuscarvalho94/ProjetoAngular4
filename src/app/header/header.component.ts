import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AnimaisService } from './../shared/services/animais.service';
import { FilterPipe } from '../shared/filter.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  @Output()
  searchText

  Usuario:Array<{email:string}> = JSON.parse(localStorage.getItem('Dados'));
  email:string;
  constructor(private AnimaisService: AnimaisService) {
    this.Usuario
   }

   onSelect(search): void {
    this.AnimaisService.sendMsg(search);
  }
  
  ngOnInit() {
   
  }

}
