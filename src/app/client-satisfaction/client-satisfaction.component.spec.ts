import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSatisfactionComponent } from './client-satisfaction.component';

describe('ClientSatisfactionComponent', () => {
  let component: ClientSatisfactionComponent;
  let fixture: ComponentFixture<ClientSatisfactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSatisfactionComponent]
    });
    fixture = TestBed.createComponent(ClientSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
