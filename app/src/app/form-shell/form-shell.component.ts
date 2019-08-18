import { Component, OnInit, Input, EventEmitter, Output, ContentChildren, QueryList, AfterViewInit, ViewChild } from '@angular/core';
import { Operation } from './operation.model';
import { NgModel, NgForm } from '@angular/forms';
import { OperationResponse } from '../form-example/operation-response-model';
import { OperationRequest } from '../form-example/operation-request.model';

@Component({
  selector: 'app-form-shell',
  templateUrl: './form-shell.component.html',
  styleUrls: ['./form-shell.component.css']
})
export class FormShellComponent implements OnInit, AfterViewInit {

  @Input() formRequest: Operation;
  @Output() formReset: EventEmitter<void> = new EventEmitter<void>();
  @Output() formResponse: EventEmitter<Operation> = new EventEmitter<Operation>();

  step: string; //form //confirmation

  @ContentChildren(NgModel) public models: QueryList<NgModel>;
  @ViewChild(NgForm, { static: false }) public form: NgForm;

  ngOnInit() {
    this.step = 'form';
  }

  ngAfterViewInit(): void {
    let ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.form.addControl(model);
    });
  }

  submitForm() {
    console.log(this.form.controls);

    if (this.form.valid) {
      // populate necessary fields and send to back-end. 
      // async wait for response
      // unmarshall json response to request object
      let response = new OperationResponse();
      response = this.formRequest as OperationResponse;
      response.status = 1; //Success



      this.formResponse.emit(response);
      if (response.status == 0) { //Error
        //deal with error, maybe message service
      } else if (response.status == 1) { //Success
        this.step = 'confirmation';
      }
    }
  }

  resetForm() {
    this.formReset.emit();
  }
}
