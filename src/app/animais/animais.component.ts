import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animais } from '../../models';
import { AnimaisService } from '../shared/services/animais.service';


@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {

  animais: Animais[] = [];

  searchText: string;

  @Input('titulo')
  titulo: string;

  constructor(private _animservices: AnimaisService) {}

  getAnimais() {
    this.animais = this._animservices.getAnimais();
  }

  ngOnInit() {
    this.getAnimais();
    this._animservices.emitSearch.subscribe(
      search => this.searchText = search
    );
  }

}
