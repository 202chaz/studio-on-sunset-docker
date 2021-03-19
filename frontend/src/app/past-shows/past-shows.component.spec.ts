import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastShowsComponent } from './past-shows.component';

describe('PastShowsComponent', () => {
  let component: PastShowsComponent;
  let fixture: ComponentFixture<PastShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
