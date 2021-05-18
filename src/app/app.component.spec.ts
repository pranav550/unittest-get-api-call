import { AppService } from './app.service';
import { fakeAsync, TestBed, async, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators'; 

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        AppService
      ]
    }).compileComponents();
  });

 

  it('should call getPostDetails and return empty', fakeAsync(()=>{
    let fixture = TestBed.createComponent(AppComponent);
    let component = fixture.debugElement.componentInstance;
    let appService = fixture.debugElement.injector.get(AppService);
    let stub = spyOn(appService, "getPosts").and.callFake(()=>{
      return of([]).pipe(delay(300));
    })
    component.getPostDetails();
    expect(component.showLoadingIndicator).toEqual(true);
    tick(300);
    expect(component.showLoadingIndicator).toEqual(false);
    expect(component.postDetails).toEqual([]);
  }))
});
