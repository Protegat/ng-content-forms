import { Component, OnInit } from '@angular/core';
import { OperationRequest } from './operation-request.model';
import { OperationResponse } from './operation-response-model';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  formRequest: OperationRequest = new OperationRequest();
  formResponse: OperationResponse = new OperationResponse();

  constructor() { }

  ngOnInit() {
    this.formRequest.user = 'user1234'; //Security flaw. Should be inserted in Back-end. 
    this.formRequest.timestamp = new Date().toLocaleDateString(); //Should also be inserted in another way.
  }

}
