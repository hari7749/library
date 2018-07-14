import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profieservice/profile.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {

  constructor(private http: Http, private profileservice: ProfileService) { }

  generalpost: any;
  ngOnInit() {
    this.getgeneralpost();
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

}
