import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm : FormGroup
  errorWhileSigning = false

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email' : new FormControl('', [
        Validators.required, Validators.email  
      ], [
            // todo custom validator
      ]),
      'password' : new FormControl('', [
        Validators.required // TODO : custom pass validator
      ])
    })
  }

  onSignIn() {
    let email = this.signInForm.get('email').value
    let password = this.signInForm.get('password').value
    this.userService.signIn(new User(email, password)).subscribe(
      (response : string) => {
        this.errorWhileSigning = false
        this.userService.saveToken(response)
        this.redirectUserLogged()
      },
      error => {
        this.errorWhileSigning = true
      }
    )
  }

  redirectUserLogged() {
    if (this.userService.urlToRedirect) {
      this.router.navigateByUrl(this.userService.urlToRedirect)
    } else {
      this.router.navigateByUrl('products')
    }
  }

  get email() { return this.signInForm.get('email') }
  get password() { return this.signInForm.get('password') }

}
