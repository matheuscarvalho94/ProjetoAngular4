import { Injectable, EventEmitter } from '@angular/core';
import { Animais } from '../../../models';

let animais = [
  {
    id: 1,
    titulo: 'Leão',
    dono: 'Michel',
    capa: 'animal1.jpg',
  },
  {
    id: 2,
    titulo: 'Baleia',
    dono: 'Diogo',
    capa: 'animal2.jpg',
  },
  {
    id: 3,
    titulo: 'Cachorro',
    dono: 'Maiara',
    capa: 'animal3.jpg',
  },
  {
    id: 4,
    titulo: 'Gato',
    dono: 'Larissa',
    capa: 'animal4.jpg',
  },
  {
    id: 5,
    titulo: 'Galo',
    dono: 'Vinicius',
    capa: 'animal5.jpg',
  },
  {
    id: 6,
    titulo: 'Javali',
    dono: 'Airton',
    capa: 'animal6.jpg',
  }
];


@Injectable()
export class AnimaisService {

  emitSearch = new EventEmitter<string>();
  constructor() { 
  }
  sendMsg(search:string) {
    this.emitSearch.emit(search);
  }
  getAnimais(): any {
    return animais;
  }


}
