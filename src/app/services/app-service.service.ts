import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService {
    constructor(private http: Http) { }
       body : string= "";
    // private instance variable to hold base url
    private baseUrl = 'http://www.mocky.io/v2/581dc2390f0000e91f02dadd';


   extractData(res:any) {
        let response = res.json();
        return response;
      }
    // Fetch the job details
    getJobDetails(): Observable<any> {
        // ...using get request
        return this.http.get(this.baseUrl)
            // ...and calling .json() on the response to return data
         .map(this.extractData)
            .catch(
            error => {
                 throw error ;
            });
    }


   
}