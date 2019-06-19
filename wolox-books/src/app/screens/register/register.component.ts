import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imagenLogo: any = '../../../assets/wolox_logo.svg';
  nForm: FormGroup;
  locale: string = 'en';

  constructor(fb: FormBuilder, 
    private userService: UserServiceService,
    private router: Router
    ) {

    this.nForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  ngOnInit() {
  }

  goLogin() {
    this.router.navigateByUrl('/login');
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
      locale : this.locale,
      }
    };
    this.userService.createUser(user)
    .subscribe(result =>
      console.log('sucess'),
    error => console.log('error', error));
    this.goLogin();
  }
}
