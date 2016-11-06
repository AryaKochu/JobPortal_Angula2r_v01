/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from '../header-component/header-component.component';
import { AppService } from '../../services/app-service.service';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
 let  appServiceStub = {
    "jobId": "5775d8e18a488e6c5bb08c13",
	"title": "Construction and Releated Workers - General",
	"company": {
		"name": "C.D.Barnes and Associates",
		"address": "123 Main Street, Tacoma, WA 98409",
		"logo": "https://static.wixstatic.com/media/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png/v1/fill/w_112,h_112,al_c,usm_0.66_1.00_0.01/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png",
		"reportTo": "Joe Blogs"
	},
	"wagePerHourInCents": 850,
	"shifts": [{
		"startDate": "2016-09-04T21:00:00Z",
		"endDate": "2016-09-05T05:00:00Z"
	}, {
		"startDate": "2016-09-05T21:00:00Z",
		"endDate": "2016-09-06T05:00:00Z"
	}, {
		"startDate": "2016-09-06T21:00:00Z",
		"endDate": "2016-09-07T05:00:00Z"
	}, {
		"startDate": "2016-09-07T21:00:00Z",
		"endDate": "2016-09-08T05:00:00Z"
	}, {
		"startDate": "2016-09-08T21:00:00Z",
		"endDate": "2016-09-09T05:00:00Z"
	}, {
		"startDate": "2016-09-11T21:00:00Z",
		"endDate": "2016-09-12T05:00:00Z"
	}, {
		"startDate": "2016-09-12T21:00:00Z",
		"endDate": "2016-09-13T05:00:00Z"
	}, {
		"startDate": "2016-09-13T21:00:00Z",
		"endDate": "2016-09-14T05:00:00Z"
	}, {
		"startDate": "2016-09-14T21:00:00Z",
		"endDate": "2016-09-15T05:00:00Z"
	}, {
		"startDate": "2016-09-15T21:00:00Z",
		"endDate": "2016-09-16T05:00:00Z"
	}],
	"branch": "Tacoma",
	"branchPhoneNumber": "253"
};

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  //to check for the title
   it('should have button titled \'Jobs Available\'', () => {
    expect(component.title).toEqual('Jobs Available');
  });

//to check for the note
 it('should have notification saying \'If you take this job, you are agreeing to work ALL DAYS\'', () => {
    expect(component.note).toEqual('If you take this job, you are agreeing to work ALL DAYS');
  });

  //to check for date format - startDate and endDate
   it('startDate and endDate should be in specified format', () => {
     let date = new Date("2016-09-04T21:00:00Z");
    expect(component.startDate).toBe(date);
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      providers:    [ {provide: AppService, useValue: appServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
