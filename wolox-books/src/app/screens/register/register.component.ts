import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../models/user';
import { isBuffer } from 'util';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imagenLogo: any = '../../../assets/wolox_logo.svg';
  nForm: FormGroup;
  post: any;
  locale = 'en';

  constructor(fb: FormBuilder, private userService: UserServiceService) {

    this.nForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  ngOnInit() {
  }

  addregister(post) {
    const user: IUser = {
      user :
      {
      first_name : post.firstName,
      last_name : post.lastName,
      email : post.email,
      password : post.password,
      password_confirmation : post.password,
      locale : this.locale
      }
    };
    console.log(JSON.stringify(user));
    this.userService.createUser(user)
    .subscribe(result => 
      console.log('sucess'),
    error => console.log('error', error));
  }

}
