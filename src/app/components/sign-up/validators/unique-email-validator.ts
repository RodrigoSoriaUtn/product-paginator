import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UniqueEmailValidator implements AsyncValidator{
    
    constructor(private userService : UserService) {

    }

    validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
        return this.userService.verifyEmail(control.value).pipe(
            map(() => null),
            catchError((err : any) => {
                if (err.status === 409) {
                    return of({emailTaken : true})
                } 
                console.error(err)
                return of(null)
            }
        ))
    }

}