import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './features/todos/todos.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './features/auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { httpInterceptorProviders } from './interceptors';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    AuthModule.forRoot(),
    TodosModule
  ],
  providers: [httpInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
