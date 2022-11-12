import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  {path:'', component:ViewComponent},
  //wildcardcomponent should always be at the bottom,
  {path:'**',component:WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
