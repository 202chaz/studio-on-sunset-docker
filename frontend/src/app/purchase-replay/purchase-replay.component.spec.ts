import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReplayComponent } from './purchase-replay.component';

describe('PurchaseReplayComponent', () => {
  let component: PurchaseReplayComponent;
  let fixture: ComponentFixture<PurchaseReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
