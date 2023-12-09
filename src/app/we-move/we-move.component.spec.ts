import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeMoveComponent } from './we-move.component';

describe('WeMoveComponent', () => {
  let component: WeMoveComponent;
  let fixture: ComponentFixture<WeMoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeMoveComponent]
    });
    fixture = TestBed.createComponent(WeMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
