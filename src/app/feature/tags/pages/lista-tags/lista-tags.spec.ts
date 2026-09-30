import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTags } from './lista-tags';

describe('ListaTags', () => {
  let component: ListaTags;
  let fixture: ComponentFixture<ListaTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTags],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTags);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
