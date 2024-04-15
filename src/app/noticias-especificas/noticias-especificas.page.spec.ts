import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasEspecificasPage } from './noticias-especificas.page';

describe('NoticiasEspecificasPage', () => {
  let component: NoticiasEspecificasPage;
  let fixture: ComponentFixture<NoticiasEspecificasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasEspecificasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
