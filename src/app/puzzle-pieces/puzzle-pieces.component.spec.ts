import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlePiecesComponent } from './puzzle-pieces.component';

describe('PuzzlePiecesComponent', () => {
  let component: PuzzlePiecesComponent;
  let fixture: ComponentFixture<PuzzlePiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzlePiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
