import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartGameComponent} from './start-game/start-game.component';
import {LandingComponent} from './landing/landing.component';
import {PlayComponent} from './play/play.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'start-game',
    component: StartGameComponent
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: '',
    redirectTo: 'landing', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
