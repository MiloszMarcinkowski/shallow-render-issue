import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ],
  imports: [CommonModule, MatSelectModule]
})
export class TestModule { }
