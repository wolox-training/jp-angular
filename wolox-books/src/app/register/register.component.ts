import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imagenLogo: any = '../assets/wolox_logo.svg';
  constructor() { }

  ngOnInit() {
  }

}
