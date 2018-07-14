import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProfileService } from '../../services/profieservice/profile.service';
import { profilesettingmodel } from '../../SharedModule/Models/profilesettingmodel';

@Component({
  selector: 'settingspage',
  templateUrl: './settingspage.component.html',
  styleUrls: ['./settingspage.component.css']
})
export class SettingspageComponent implements OnInit {

  errorMessage="";
  successMessage="";

  profilesetting:profilesettingmodel={

    
    CompanyID:9,
    OldPoc:"",
    NewPoc:"",
    RequestType:""
  }
  OldPocnum:any;
  NewPocnum:any;
  NewPoc2:any;
  OldPoc2:any;
  NewPoc1:any;
  OldPoc1:any;

  constructor(private http: Http, private profileservice: ProfileService) { }

  ngOnInit() {
  }



  Profilesetting1(evnt)
  {
    debugger;
    this.successMessage="";
    this.errorMessage = "";
    this.profilesetting.RequestType=evnt.target.id;   
    this.profilesetting.OldPoc= this.OldPoc1;
    this.profilesetting.NewPoc=  this.NewPoc1;  
    this.profileservice.InsertProfileSetting(this.profilesetting).subscribe(
      data=>{
        debugger;
        this.successMessage ="Profile Setting Updated"
        this.OldPoc1="";
        this.NewPoc1="";
      },error =>{this.errorMessage=<any>error;
      debugger;
      }
    )
  }
  Profilesetting2(evnt)
  {
    debugger;
    this.successMessage="";
    this.errorMessage = "";
    this.profilesetting.RequestType=evnt.target.id; 
    this.profilesetting.OldPoc= this.OldPoc2;
    this.profilesetting.NewPoc=  this.NewPoc2;    
    this.profileservice.InsertProfileSetting(this.profilesetting).subscribe(
      data=>{
        debugger;
        this.successMessage ="Profile Setting Updated"
      },error =>{this.errorMessage=<any>error;
      debugger;
      }
    )
  }

  Profilesetting3(evnt)
  {
    debugger;
    this.successMessage="";
    this.errorMessage = "";
    this.profilesetting.RequestType=evnt.target.id;   
    this.profilesetting.OldPoc= this.OldPocnum;
    this.profilesetting.NewPoc=  this.NewPocnum;
    this.profileservice.InsertProfileSetting(this.profilesetting).subscribe(
      data=>{
        debugger;
        this.successMessage ="Profile Setting Updated"
      },error =>{this.errorMessage=<any>error;
      debugger;
      }
    )
  }

  


}
