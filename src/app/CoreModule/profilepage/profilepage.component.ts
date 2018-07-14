import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProfileService } from '../../services/profieservice/profile.service';
import { connectmodel } from '../../SharedModule/Models/connectmodel';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  ngOnInit(): void {
    this.getsuggestion() ;
    this.getcompanydetails();
    this.getgeneralpost();
  }
  worddesc: any;
  posts: any;
  suggestion: any;
  generalpost: any;
  errorMessage="";
  successMessage="";
  BannerPhoto="";
  companyId=this.route.snapshot.paramMap.get('CompanyId');
  
  connect:connectmodel={
    ConnectReason:"Dummy",
    Description:"",
    ModifiedBy:"OLA"

  }
  constructor(private http: Http, private profileservice: ProfileService ,private route: ActivatedRoute) {
    // http.get(this.url + 'Company/GetCompanyDetails?ID=12')
    //   .subscribe(response => {
    //     debugger
    //     this.posts = response.json();
    //   });


    // http.get(this.url + 'Company/GetSuggestionType?id=1')
    //   .subscribe(response => {
    //     debugger
    //     this.suggestion = response.json();
    //   });


    // http.get(this.url + 'Company/GetGeneralPost')
    //   .subscribe(response => {
    //     debugger
    //     this.generalpost = response.json();
    //   });

  } 

  getsuggestion() {
    let id = 1;
    this.profileservice.GetSuggestionType(id).then(
      Response => {
        debugger;
        this.suggestion = Response;
      }, error => {
        debugger;
      }

    )
  }

  getcompanydetails() {
    debugger;
    let ID = this.companyId;
    this.profileservice.GetCompanyDetails(ID).then(
      Response => {
        debugger;
        this.posts = Response;
        this.BannerPhoto=Response[0].bannerPhoto;
      },
      error => {
        debugger;
      }
    )
  }


  getgeneralpost(){
    this.profileservice.GetGeneralPost().then(
      Response => {
        debugger;
        this.generalpost = Response;
      },
      error => {
        
      }
    )
  }


  ReasonForConnect()
  {
    this.successMessage="";
    this.errorMessage = "";     
    this.profileservice.InsertConnect(this.connect).subscribe(
      data=>{
        debugger;
        this.successMessage ="connect Resiterd Sucess"
      },error =>{this.errorMessage=<any>error;
      debugger;
      }
    )
  }

  




}









