import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundGradientDirective } from './shared/background-gradient.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnimaisComponent } from './animais/animais.component';
import { AnimaisModule } from './animais/animais.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth-guard';
import { AnimaisService } from './shared/services/animais.service';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundGradientDirective,
    HomeComponent,
    LoginComponent,
    AnimaisComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, AnimaisService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
