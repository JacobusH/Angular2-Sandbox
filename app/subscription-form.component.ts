import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, AsyncValidatorFn} from '@angular/forms';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/subscription-form.component.html'
})
export class SignUpFormComponent
{
    form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
}