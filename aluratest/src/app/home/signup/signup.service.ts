import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localgost:2000";

@Injectable({ providedIn: 'root' })
export class signupService{

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

       return this.http.get(API_URL + '/user/exists/' + userName);
            
    }
}