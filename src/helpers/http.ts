export class APIResponse<T> {
  body: T;
  message: string;
  statusCode: number;

  constructor(body: T, message: string, statusCode: number = 200) {
    this.body = body;
    this.message = message;
    this.statusCode = statusCode;
  }
}
