import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoriesListComponent } from './userstories-list.component';

describe('UserstoriesListComponent', () => {
  let component: UserstoriesListComponent;
  let fixture: ComponentFixture<UserstoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
