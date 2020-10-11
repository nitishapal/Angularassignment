import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }
  getHttpResponse(from, to){
   // const jsonDatarurl = `http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`;
    const jsonDatarurl = `http://jsonplaceholder.typicode.com/photos?_start=${from}&_limit=${to}`;
    return new Promise((resolve, reject) => {
      this.httpclient.get(jsonDatarurl, { })
        .toPromise()
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          return reject(error);
        });
    });
  }
}
