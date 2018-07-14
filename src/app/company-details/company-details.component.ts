import { companydetailsModel } from './../SharedModule/Models/companydetailsmodel';
import { Component, OnInit } from '@angular/core';
import {CompanydetailsService} from '../services/companydetails.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'companydetails',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  successMessage: string;    
  errorMessage: string;
   CompanyID:any;
  companydetails:companydetailsModel={
    
    ID: 0,
    CompanyName:"",
    EmailID:"",
    Password:"",
    OTP:"",
    Description:"",
    Website:"",
    AgeGroupID:1,
    GenderID:1,
    AreaOfLocationID:1,
    SectorID:1,
    SegmentID:1,
    OcupationID:1,
    AreaOfOperationID:1,
    ContactPOC1Name:"",
    ContactPOC1Email:"",
    ContactPOC1PhoneNumber:"",
    ContactPOC2Name:"",
    ContactPOC2PhoneNumber:"",
    ContactPOC2Email:"",
    Designation:"",
    Logo:"",
    BannerPhoto:"",
    VerificationStatus:"",
    ModifiedBy:""

  }
  ageofOperation: any;
  ageGroup: any;
  Gender: any;

  constructor(private companyDetailsService:CompanydetailsService,private homeservices: HomeService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFilterAgeGroup();
    this.getFilterGender();
    this.getFilterAreaOfOperation();
  }
  getFilterAgeGroup() {
    this.successMessage = "";
    this.errorMessage = "";

    this.homeservices.getFilterAgeGroup().then(
      data => {
        this.ageGroup = data;

        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;

      }
    )

  }
  getFilterGender() {
    this.successMessage = "";
    this.errorMessage = "";

    this.homeservices.getFilterGender().then(
      data => {
        this.Gender = data;

        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;

      }
    )

  }

  getFilterAreaOfOperation() {
    this.successMessage = "";
    this.errorMessage = "";

    this.homeservices.getFilterAreaOfOperation().then(
      data => {
        this.ageofOperation = data;

        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;

      }
    )

  }

  UpdateCompanyDetails()
  { 
    debugger;
    this.successMessage="";
    this.errorMessage = "";   
    this.companydetails.ID =Number(this.route.snapshot.paramMap.get('companyID'));  
    this.companyDetailsService.Companydetailservice(this.companydetails).subscribe(
      data=>{
        debugger;
        this.successMessage ="Company Resiterd Sucess"
      },error =>{this.errorMessage=<any>error;
      debugger;
      }
    )
  }

}
