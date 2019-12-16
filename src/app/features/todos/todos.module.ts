import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    HttpClientModule,
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
