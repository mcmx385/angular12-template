import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPermsComponent } from './not-perms.component';

describe('NotPermsComponent', () => {
  let component: NotPermsComponent;
  let fixture: ComponentFixture<NotPermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
