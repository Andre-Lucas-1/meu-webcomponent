import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MocksTags } from './pages/mocks-tags/mocks-tags';

@NgModule({
  declarations: [MocksTags],
  exports: [MocksTags],
  imports: [CommonModule],
})
export class MocksModule {}
