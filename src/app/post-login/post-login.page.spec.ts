import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostLoginPage } from './post-login.page';

describe('PostLoginPage', () => {
  let component: PostLoginPage;
  let fixture: ComponentFixture<PostLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
