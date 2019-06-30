import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatListModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const importsAndExports = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule 
];

@NgModule({
  imports: importsAndExports,
  exports: importsAndExports,
})
export class SharedModule { }