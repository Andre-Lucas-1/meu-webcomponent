import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBackends } from './pages/lista-backends/lista-backends';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaBackends],
  exports: [ListaBackends],
  imports: [CommonModule, FormsModule],
})
export class BackendsModule {}
