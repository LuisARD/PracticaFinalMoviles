import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormvolunPage } from './formvolun.page';

describe('FormvolunPage', () => {
  let component: FormvolunPage;
  let fixture: ComponentFixture<FormvolunPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvolunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
