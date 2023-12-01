export interface ApiCallPayload {
  action: string;
  body?: object | null | undefined;
  params?: object | null | any;
}