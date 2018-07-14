import { SettingspageComponent } from './CoreModule/settingspage/settingspage.component';
import { ProfilepageComponent } from './CoreModule/profilepage/profilepage.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './CoreModule/login/login.component';
import {HomeComponent} from './CoreModule/home/home.component';
import{GeneralpostComponent} from './CoreModule/generalpost/generalpost.component';
import { NotificationPageComponent } from './CoreModule/notification-page/notification-page.component';


const routes: Routes = [
{path:'', component:LoginComponent },
{path:'company-details',component:CompanyDetailsComponent},
{path:'home',component:HomeComponent},
{path:'profilepage', component:ProfilepageComponent },
{path:'profilesetting', component:SettingspageComponent },
{path:'GeneralPosts', component:GeneralpostComponent },
{path:'Notifications', component:NotificationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
