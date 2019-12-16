import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as userActions from '../actions/user.actions';
import { environment } from '../../../../environments/environment';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {

  // loginRequest -> (loginRequest Succeeded | loginRequestFailed)
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginRequest),
      switchMap((a) => this.client.post<{ access_token: string }>(environment.authUrl, { username: a.username, password: a.password })
        .pipe(
          map(r => userActions.loginRequestSucceeded({ username: a.username, token: r.access_token })),
          catchError(() => of(userActions.loginRequestFailed({ message: 'Bad Username or Password' })))
        )
      )
    )
    , { dispatch: true });

  constructor(private actions$: Actions, private client: HttpClient) { }
}
