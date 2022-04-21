import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'comics', component: ComicsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
