import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { ProductsectionComponent } from './productsection/productsection.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CardComponent } from './card/card.component';
import { ShippingaddressComponent } from './shippingaddress/shippingaddress.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerificationCodeComponent,
    NewPasswordComponent,
    FiltersComponent,
    AdminComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HerosectionComponent,
    ProductsectionComponent,
    ReviewsComponent,
    TestimonialComponent,
    ProductdetailsComponent,
    CardComponent,
    ShippingaddressComponent,
    PaymentmethodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
