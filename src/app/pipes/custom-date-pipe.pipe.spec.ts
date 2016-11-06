/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CustomDatePipePipe } from './custom-date-pipe.pipe';
import { DatePipe } from '@angular/common';

describe('Pipe: CustomDatePipe', () => {
  it('create an instance', () => {
    let value = "2016-09-04T21:00:00Z";
    let pipe = new CustomDatePipePipe( "2016-09-04T21:00:00Z");
    expect(pipe.transform(value)).toMatch('Mon, Sep 05 2:30AM IST');
    });
});
