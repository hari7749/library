import { Component, OnInit } from '@angular/core';
import{AutenticationService} from '../../SharedModule/Auth/autentication.service';
import { Router } from '@angular/router';
import{UserLogin} from'../../SharedModule/Models/UserLogin'
import{companyModel} from'../../SharedModule/Models/UserLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token="";
    Loggedin: boolean = null;
    successMessage: string;    
    errorMessage: string;
    
    company:companyModel={
      CompanyName:"",
      EmailID:"",
      Password:'',
    }
    CompanyConfirmPassword="";
    Users : UserLogin ={
    UserName: '',
    Password: ''
  };
  constructor(private authservice: AutenticationService,private router: Router) { }

  ngOnInit() {
  }

  dologin(evnt)
  {
    debugger;
    this.successMessage="";
    this.errorMessage = ""; 
    this.authservice.getLogin(this.Users).then(
      data=>{
        this.successMessage ="User Logged in with token " + data['access_token'];
        if(data['access_token']!=undefined)
        {
          this.Loggedin=true;
       
           this.router.navigate(['/home']);
        }
        else
        {
          this.Loggedin=false;
        }
        
       }, error =>{this.errorMessage = <any>error;
        this.Loggedin=false;
      } 
     );   

  }
  SignUpCompany(evnt){
      debugger;
      this.successMessage="";
      this.errorMessage = ""; 


      this.authservice.SignUpCompany(this.company).subscribe(
        data=>{
          debugger;
          this.router.navigate(['/company-details',{"companyID":data}])
          this.successMessage ="Company signUp Sucess"
        },error =>{this.errorMessage=<any>error;
        debugger;
        }
      )
  }



}
