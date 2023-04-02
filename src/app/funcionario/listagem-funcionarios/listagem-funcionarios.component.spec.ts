import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFuncionariosComponent } from './listagem-funcionarios.component';

describe('ListagemFuncionariosComponent', () => {
  let component: ListagemFuncionariosComponent;
  let fixture: ComponentFixture<ListagemFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
