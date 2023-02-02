import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFrameViewComponent } from './i-frame-view.component';

describe('IFrameViewComponent', () => {
  let component: IFrameViewComponent;
  let fixture: ComponentFixture<IFrameViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IFrameViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFrameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
