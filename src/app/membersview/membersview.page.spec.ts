import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembersviewPage } from './membersview.page';

describe('MembersviewPage', () => {
  let component: MembersviewPage;
  let fixture: ComponentFixture<MembersviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
