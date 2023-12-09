import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo02Component } from './demo-02.component';

describe('Demo02Component', () => {
  let component: Demo02Component;
  let fixture: ComponentFixture<Demo02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo02Component]
    });
    fixture = TestBed.createComponent(Demo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
