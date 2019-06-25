import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from 'src/app/models/session.model';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imagenLogo: any = '../../../assets/wolox_logo.svg';
  lForm : FormGroup;
  post : any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userservice: UserServiceService
  ) {
    this.lForm = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });
   }

  ngOnInit() {
  }

  login(post) {
    const session: ISession = {
      session : {
        email : post.email,
        password : post.password
      }
    };
    this.userservice.login(session)
    .subscribe(result =>
      console.log(result.access_token),
      error => console.log('error', error));
  }

}
