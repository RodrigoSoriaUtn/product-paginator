import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, ControlContainer } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/auth/user';
import { Router } from '@angular/router';
import { UniqueEmailValidator } from './validators/unique-email-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signInForm : FormGroup
  errorWhileSigning = false

  constructor(private userService : UserService, private router : Router, private emailValidator : UniqueEmailValidator) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email' : new FormControl('', [ Validators.required, Validators.email  ], [ this.emailValidator.validate.bind(this.emailValidator) ]),
      'password' : new FormControl('', [ Validators.required ]), 
      'repeat-password' : new FormControl('', [ Validators.required ])
    }, 
    [ this.passwordMatchValidator() ]
    )
  }

  passwordMatchValidator(): ValidatorFn {
    return (control : FormGroup) : ValidationErrors | null => {
      const password = control.get('password')
      const repeatPassword = control.get('repeat-password')
      return password && repeatPassword && repeatPassword.value === password.value ? null : { passwordsDoNotMatch: true }
    }
  }

  onSignUp() {
    let email = this.signInForm.get('email').value
    let password = this.signInForm.get('password').value
    this.userService.signUp(new User(email, password)).subscribe(
      (response : string) => {
        this.errorWhileSigning = false
        this.redirectUserLogged()
      },
      error => {
        this.errorWhileSigning = true
      }
    )
  }

  redirectUserLogged() {
    this.router.navigateByUrl('signin')
  }

  passwordsDoNotMatch() {
    if (this.signInForm.errors) {
      return this.signInForm.errors.passwordsDoNotMatch
    }
    return false
  }

  get email() { return this.signInForm.get('email') }
  get password() { return this.signInForm.get('password') }
  get repeatPassword() { return this.signInForm.get('repeat-password') }

}
