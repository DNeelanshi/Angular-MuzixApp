import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrackListComponent } from './search-track-list.component';

describe('SearchTrackListComponent', () => {
  let component: SearchTrackListComponent;
  let fixture: ComponentFixture<SearchTrackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
