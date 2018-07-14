import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HomeService } from '../../services/home/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  sectors: any;
  ageofOperation: any;
  ageGroup: any;
  Gender: any;
  segment: any;
  companies: any;
  generalposts: any;
  filtertype: any;
  Suggetions:any;


  constructor(private homeservices: HomeService, private router: Router) { }

  ngOnInit() {
    this.getFilterSector();
    this.getFilterAreaOfOperation();
    this.getFilterAgeGroup();
    this.getFilterGender();
    this.getFilterSegment();
    this.getGeneralPosts();
    this.getSuggetions();
  }
  getFilterSector() {
    this.successMessage = "";
    this.errorMessage = "";

    this.homeservices.getFilterSector().then(
      data => {
        this.sectors = data;

        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;

      }
    )

  }

  knowmore(event) {
    debugger;
    var id = event.target.id;
    this.router.navigate(['/profilepage', { "CompanyId":id}])
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
  getFilterSegment() {
    this.successMessage = "";
    this.errorMessage = "";

    this.homeservices.getFilterSegment().then(
      data => {
        this.segment = data;

        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;

      }
    )

  }
  getCompaniesby_Sector(event) {
    this.successMessage = "";
    this.errorMessage = "";
    var id = event.target.id;
    this.filtertype = event.target.innerHTML;

    event.preventDefault();
    debugger;
    this.homeservices.getComapanybysector(id).then(
      data => {
        this.companies = data;

        debugger;
        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }
  getCompaniesby_AreaOfOperation(event) {
    this.successMessage = "";
    this.errorMessage = "";
    var id = event.target.id;
    this.filtertype = event.target.innerHTML;
    event.preventDefault();

    debugger;
    this.homeservices.getComapanybyAreaOfOperation(id).then(
      data => {
        this.companies = data;
        debugger;
        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }
  getCompaniesby_AgeGroup(event) {
    this.successMessage = "";
    this.errorMessage = "";
    var id = event.target.id;
    this.filtertype = event.target.innerHTML;
    event.preventDefault();
    debugger;
    this.homeservices.getComapanybyAgeGroup(id).then(
      data => {
        this.companies = data;
        debugger;
        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }
  getCompaniesby_Gender(event) {
    this.successMessage = "";
    this.errorMessage = "";
    var id = event.target.id;
    this.filtertype = event.target.innerHTML;
    event.preventDefault();
    debugger;
    this.homeservices.getComapanybyGender(id).then(
      data => {
        this.companies = data;
        debugger;
        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }
  getCompaniesby_Segment(event) {
    this.successMessage = "";
    this.errorMessage = "";
    var id = event.target.id;
    this.filtertype = event.target.innerHTML;
    event.preventDefault();
    debugger;
    this.homeservices.getComapanybySegment(id).then(
      data => {
        this.companies = data;
        debugger;
        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }
  getGeneralPosts() {
    debugger;
    this.successMessage = "";
    this.errorMessage = "";
    debugger;

    this.homeservices.getGeneralPosts().then(
      data => {
        this.generalposts = data;
        debugger;
        this.successMessage = "Company signUp Sucess"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }

  getSuggetions()
  {
    debugger;
    this.successMessage = "";
    this.errorMessage = "";    
    var id=9;
    this.homeservices.getSuggentions(id).then(
      data => {
        this.Suggetions = data;
        debugger;
        this.successMessage = "Company signUp Success"
      }, error => {
        this.errorMessage = <any>error;
        debugger;
      }
    )
  }
  

}
