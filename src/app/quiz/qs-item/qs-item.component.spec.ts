import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QsItemComponent } from './qs-item.component';

describe('QsItemComponent', () => {
  let component: QsItemComponent;
  let fixture: ComponentFixture<QsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
