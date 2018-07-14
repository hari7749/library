import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './CoreModule/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './SharedModule/footer/footer.component';
import { HomeComponent } from './CoreModule/home/home.component';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ProfilepageComponent } from './CoreModule/profilepage/profilepage.component';
import { SettingspageComponent } from './CoreModule/settingspage/settingspage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GeneralpostComponent } from './CoreModule/generalpost/generalpost.component';
import { NotificationPageComponent } from './CoreModule/notification-page/notification-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    TopnavbarComponent,
    CompanyDetailsComponent,
    ProfilepageComponent,
    SettingspageComponent,
    GeneralpostComponent,
    NotificationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule, 
    BrowserAnimationsModule, 
    NoopAnimationsModule,MatButtonModule, 
    MatCheckboxModule,  
    NgbModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
