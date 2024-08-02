import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoproductsComponent } from './demoproducts/demoproducts.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SelectionsComponent } from './selections/selections.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoproductsComponent,
    FooterComponent,
    LoginpageComponent,
    SelectionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
