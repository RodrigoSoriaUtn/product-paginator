import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlToRedirect : string = ''
  private apiUrl = "https://utn2019-avanzada2-tp9.herokuapp.com"
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  public signIn(user : User) {
    let url = this.apiUrl + "/login"
    return this.httpClient.post(url, user, this.httpOptions)
  }

  public signUp(user : User) {
    let url = this.apiUrl + "/sign-up"
    return this.httpClient.post(url, user, this.httpOptions)
  }

  public verifyEmail(email : string) {
    let url = this.apiUrl + "/users/identities?email=" + email
    return this.httpClient.get(url)
  }

  public saveToken(jwtToken : string) {
    localStorage.setItem("jwt", jwtToken)
  }

}
