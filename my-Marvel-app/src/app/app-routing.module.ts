import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComicsComponent } from './comics/comics.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import {CharactersComponent} from './characters/characters.component';

const routes: Routes = [
  {
     path: '', redirectTo: 'characters',pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'comics',component: ComicsComponent},
  { path: 'settings',component: SettingsComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
