import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { FilterComponent } from './header/filter/filter.component';
import { FilterModalComponent } from './header/filter/filter-modal/filter-modal.component';
import { ViewComponent } from './view/view.component';
import { CardItemComponent } from './view/card-item/card-item.component';
import { InnerPgComponent } from './view/inner-pg/inner-pg.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './footer/contact-us/contact-us.component';
import { TermsComponent } from './footer/terms/terms.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoginComponent } from './user-account/login/login.component';
import { RegisterComponent } from './user-account/register/register.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WildCardComponent } from './wild-card/wild-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FilterComponent,
    FilterModalComponent,
    ViewComponent,
    CardItemComponent,
    InnerPgComponent,
    FooterComponent,
    ContactUsComponent,
    TermsComponent,
    UserAccountComponent,
    LoginComponent,
    RegisterComponent,
    WildCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
