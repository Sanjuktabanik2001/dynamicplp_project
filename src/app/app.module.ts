import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';

// import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

import { RouterModule, Routes } from '@angular/router';
import { MiddlesectionComponent } from './middlesection/middlesection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '', component: MiddlesectionComponent},
  
  { path: 'loginpage', component: LoginpageComponent},
  
  { path: 'aboutsection', component: AboutsectionComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cart', component: CartComponent},

  { path: 'productlisting', component: ProductlistingComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginpageComponent,
    FooterComponent,
    AboutsectionComponent,
    GalleryComponent,
    ContactComponent,
    CartComponent,
    ProductlistingComponent,
    MiddlesectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
