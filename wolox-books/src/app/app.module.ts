import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './screens/unauth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './screens/unauth/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './services/local-storage.service';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BooklistComponent } from './auth/booklist/booklist.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    UnauthComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
