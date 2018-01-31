import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animais } from '../../models';
import { AnimaisService } from '../shared/services/animais.service';


@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class animaisComponent implements OnInit {

  animais:Animais[] = [];

  searchText:string

  @Input('titulo') 
  titulo: string;

  constructor(private AnimaisService: AnimaisService) {}

  getAnimais() {
    this.animais = this.AnimaisService.getAnimais();
  }

  ngOnInit() {
    this.getAnimais();
    this.AnimaisService.emitSearch.subscribe(
      search => this.searchText = search
    );
  }

}
