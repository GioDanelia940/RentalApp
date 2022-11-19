import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './sharedComponents/payments/payments.component';
import { LoginComponent } from './user-account/login/login.component';
import { RegisterComponent } from './user-account/register/register.component';
import { InnerPgComponent } from './view/inner-pg/inner-pg.component';
import { ViewComponent } from './view/view.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewComponent },
  { path: 'view/:id',component:InnerPgComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'payments/:id', component:PaymentsComponent},
  //wildcardcomponent should always be at the bottom,
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
