import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import { LayoutComponent } from './views/layout.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
