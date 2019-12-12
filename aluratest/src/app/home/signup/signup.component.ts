import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case-validator';
import { userNotTakenValidatorService } from './user-not-taken.validator.service';


@Component({
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: userNotTakenValidatorService){

    }

    ngOnInit(): void{
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(50)            
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(8),
                    Validators.maxLength(20)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(20)
                ]
            ]
        });

    }


}