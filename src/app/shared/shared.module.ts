import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListFilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [HeaderComponent, ListFilterPipe],
  exports: [HeaderComponent, ListFilterPipe],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
