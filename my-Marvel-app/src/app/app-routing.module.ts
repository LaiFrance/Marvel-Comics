import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import {AvengersComponent} from './avengers/avengers.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
     path: '', redirectTo: 'loginpage', pathMatch: 'full'
  },

  { 
    path: 'loginpage', component: LoginPageComponent
  },

  {
    path: '', 
    component: NavbarComponent,
    children: [
  {path: 'home', component: HomeComponent },
  {path: 'characters', component: CharactersComponent },
{path: 'comics', component: ComicsComponent},
{path: 'avengers', component: AvengersComponent},
{path: 'search', component: SearchComponent},
{path: 'Sair', component: LoginPageComponent},
  ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
