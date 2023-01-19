import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsViewComponent } from './gits-view.component';

describe('GitsViewComponent', () => {
  let component: GitsViewComponent;
  let fixture: ComponentFixture<GitsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
