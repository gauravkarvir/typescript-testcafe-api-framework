export interface ItemModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface GenericResponse<B> {
  status: number;
  statusText: string;
  headers: any;
  config: any;
  data: B;
  request?: any;
}

export interface ServiceResponse<B> {
  body: any;
  header: any;
  info?: boolean;
  links?: object;
  status: number;
  statusType?: number;
  text?: string;
}

export enum Status {
  NOT_STARTED = 'NOT_STARTED',
  COMPLETED = 'COMPLETED',
}
