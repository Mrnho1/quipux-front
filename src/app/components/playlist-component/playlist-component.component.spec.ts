import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponentComponent } from './playlist-component.component';

describe('PlaylistComponentComponent', () => {
  let component: PlaylistComponentComponent;
  let fixture: ComponentFixture<PlaylistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistComponentComponent]
    });
    fixture = TestBed.createComponent(PlaylistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
