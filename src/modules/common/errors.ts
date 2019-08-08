export class AppError extends Error {
  public message: string;
  public code: string;
  public statusCode: number;
  public details: any;

  constructor(message: string, code: string, statusCode: number = 500, details: any) {
    super(message);
    this.message = message;
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }

  toJson () {
    return {
      statusCode: this.statusCode,
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Credentials" : true 
      },
      body: {
        message: this.message,
        code: this.code,
        errors: this.details
      },
    }
  }
}

export class InvalidUsageError extends AppError {
  constructor (message: string, code: string, statusCode: number = 400, details: any) {
    super(message, code, statusCode, details);
  }
}

export default AppError;
