import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlberguesMapPage } from './albergues-map.page';

describe('AlberguesMapPage', () => {
  let component: AlberguesMapPage;
  let fixture: ComponentFixture<AlberguesMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlberguesMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
