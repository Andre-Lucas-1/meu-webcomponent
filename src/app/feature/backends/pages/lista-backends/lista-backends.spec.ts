import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaBackends } from './lista-backends';

describe('ListaBackends', () => {
  let component: ListaBackends;
  let fixture: ComponentFixture<ListaBackends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaBackends],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaBackends);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
