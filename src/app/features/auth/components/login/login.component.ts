import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState, selectUserIsLoggedIn, selectLoggedInUserName } from '../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  userName$: Observable<string>;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(selectUserIsLoggedIn);
    this.userName$ = this.store.select(selectLoggedInUserName);
  }

}
