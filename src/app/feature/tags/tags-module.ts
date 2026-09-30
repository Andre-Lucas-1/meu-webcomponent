import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTags } from './pages/lista-tags/lista-tags';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaTags],
  exports: [ListaTags],
  imports: [CommonModule, FormsModule],
})
export class TagsModule {}
