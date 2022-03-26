import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseBlockComponent } from './if-else-block.component';

describe('IfElseBlockComponent', () => {
  let component: IfElseBlockComponent;
  let fixture: ComponentFixture<IfElseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
