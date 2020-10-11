import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  httpResponse: any = [];
  constructor(private httpservice: HttpService) {
    this.getData(0, 5);
  }
  title = 'assignment1';
  getData(from, to){
    debugger;
    this.httpResponse = [];
    this.httpservice.getHttpResponse(from, to).then((data: any) => {
      this.httpResponse = data;
      console.log(data);
    }).catch((error) => {

    });
  }
}
