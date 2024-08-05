import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoproductsComponent } from './demoproducts/demoproducts.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SelectionsComponent } from './selections/selections.component';
import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoproductsComponent,
    FooterComponent,
    LoginpageComponent,
    SelectionsComponent,
    AboutsectionComponent,
    GalleryComponent,
    ContactComponent,
    CartComponent,
    ProductlistingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
