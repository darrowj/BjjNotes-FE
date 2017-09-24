import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../service/authService'
import {Profile} from "../model/profile";
import {ProfileService} from "../service/profile.service";


@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }`
    ]
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();

  errorMessage: string;

  constructor(private router:Router, private authService:AuthService, private profileService: ProfileService) {}

  ngOnInit() {

  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    //return this.profile.firstName.valid || this.profile.firstName.untouched
  }

  validateLastName() {
    //return this.profile.lastName.valid || this.profile.lastName.untouched
  }

  submitUpdateProfile(profile: Profile) {
    //if(this.profileForm.valid) {
      //this.authService.updateCurrentUser(formValues.firstname, formValues.lastname)
      //this.toastr.success('Profile Saved');
    //}

  }

  submitNewProfile() {

    this.profileService.insertProfile(this.profile)
      .subscribe((profile: Profile) => {
          if (profile) {
            this.router.navigate(['/note-list']);
          } else {
            this.errorMessage = 'Unable to save BJJ User Profile';
          }
        },
        (err: any) => console.log(err));

  }


}