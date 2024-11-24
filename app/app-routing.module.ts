import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { FiltersComponent } from './filters/filters.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { ProductsectionComponent } from './productsection/productsection.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CardComponent } from './card/card.component';
import { ShippingaddressComponent } from './shippingaddress/shippingaddress.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component:SignupComponent },
  { path: 'login' , component:LoginComponent },
  { path: 'forgot-password' , component:ForgotPasswordComponent},
  { path: 'verification-code' , component:VerificationCodeComponent},
  { path: 'new-password' , component:NewPasswordComponent},
  { path: 'filters' , component:FiltersComponent},
  { path: 'admin' , component:AdminComponent},
  { path: 'about' , component:AboutComponent},
  { path: 'contact' , component:ContactComponent},
  { path: 'home' , component:HomeComponent},
  { path: 'herosection' , component:HerosectionComponent},
  { path: 'productsection' , component:ProductsectionComponent},
  { path: 'reviews' , component:ReviewsComponent},
  { path: 'testimonial' , component:TestimonialComponent},
  { path: 'productdetails' , component:ProductdetailsComponent},
  { path: 'card' , component:CardComponent},
  { path: 'shippingaddress' , component:ShippingaddressComponent},
  { path: 'paymentmethod' , component:PaymentmethodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
