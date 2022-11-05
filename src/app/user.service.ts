import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  constructor(private httpClient:HttpClient) { }

 
  public loginUser(user:User): boolean {
    if (user.username === 'admin' && user.password === '1234') {
      return true;
    }
    return false;
  }
  

}