import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  httpResponse: any = {};
  constructor(private httpservice: HttpService) {
    this.ButtonClick();
  }
  title = 'assignment1';
  ButtonClick(){
    this.httpservice.getHttpResponse().then((data: any) => {
      this.httpResponse = data;
      console.log(data);
    }).catch((error) => {

    });
  }
}
