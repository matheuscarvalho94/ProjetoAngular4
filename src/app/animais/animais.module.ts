import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { animaisComponent } from './animais.component';
import { AnimaisService } from '../shared/services/animais.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [animaisComponent],
    declarations: [animaisComponent],
    providers: [AnimaisService],
})
export class AnimaisModule { }
