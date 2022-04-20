import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComicsComponent } from './comics/comics.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  { path: 'home', component: HomeComponent },
  {path:'personagens',component: PersonagensComponent},
  {path:'comics',component: ComicsComponent},
  {path:'settings',component: SettingsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
