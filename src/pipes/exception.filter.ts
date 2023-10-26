import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  BadRequestException,
} from '@nestjs/common';
import { MongoServerError } from 'mongodb';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof BadRequestException) {
      const { message } = exception.getResponse() as unknown as Record<
        string,
        { message: Array<string> }
      >;

      // Handle HTTP exceptions (e.g., 404, 500)
      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: request.url,
        message,
      });
    } else if (exception instanceof HttpException) {
      // Handle HTTP exceptions (e.g., 404, 500)
      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: request.url,
        message: [exception.message],
      });
    } else if (exception instanceof MongoServerError) {
      // Handle MongoDB duplicate key errors
      response.status(409).json({
        statusCode: 409,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: ['Duplicate key error: This record already exists.'],
      });
    } else {
      // Handle other exceptions (e.g., application-specific errors)
      response.status(500).json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: ['Internal Server Error'],
      });
    }
  }
}
