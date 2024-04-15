import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisituacionesPage } from './misituaciones.page';

describe('MisituacionesPage', () => {
  let component: MisituacionesPage;
  let fixture: ComponentFixture<MisituacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisituacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
