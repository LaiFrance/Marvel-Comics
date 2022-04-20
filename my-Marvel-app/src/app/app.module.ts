import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { ComicsComponent } from './comics/comics.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PersonagensComponent,
    ComicsComponent,
    PesquisarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
