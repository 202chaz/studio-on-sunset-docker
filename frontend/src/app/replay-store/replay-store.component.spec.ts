import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayStoreComponent } from './replay-store.component';

describe('ReplayStoreComponent', () => {
  let component: ReplayStoreComponent;
  let fixture: ComponentFixture<ReplayStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
