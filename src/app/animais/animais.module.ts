import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AnimaisComponent } from './animais.component';
import { AnimaisService } from '../shared/services/animais.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [AnimaisComponent],
    declarations: [AnimaisComponent],
    providers: [AnimaisService],
})
export class AnimaisModule { }
