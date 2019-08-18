import { OperationRequest } from './operation-request.model';

export class OperationResponse extends OperationRequest{
    status: number; //0 - Error //1 - Success
}