import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListFilterPipe } from './pipes/filter.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, ListFilterPipe, SpinnerComponent],
  exports: [HeaderComponent, ListFilterPipe, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
