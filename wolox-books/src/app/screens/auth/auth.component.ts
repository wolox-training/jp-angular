import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  imageLogo: any = '../../../assets/wolox_logo.svg';
  constructor(private authLocalSorage: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authLocalSorage.removeValue('token');
    this.router.navigateByUrl('/login');
  }
}
