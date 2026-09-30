import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Painel } from './pages/painel/painel';

@NgModule({
  declarations: [Painel],
  exports: [Painel],
  imports: [CommonModule],
})
export class DashboardModule {}
