import HttpStatusCode from "../shared/enums/httpStatusCode";
import { ResponseManager } from "../shared/response/ResponseManager";
import ErrorCode from "../shared/error/errorCode";
import Warning from "../shared/error/Warning";
import Exception from "../shared/error/Exception";

export const httpResponseHandlerMiddleware = () => {
  const responseManager = new ResponseManager();

  const middlewareAfter = (request: any) => {
    const { response } = request;
    const statusCode = response.statusCode || HttpStatusCode.OK;
    const data = response.data || response;
    request.response = responseManager.handleResponse(statusCode, data);
  };

  const middlewareOnError = (request: any) => {
    const { error, response } = request;
    console.log("ERROR: ", error);
    if (error instanceof Warning) {
      request.response = responseManager.handleErrorResponse(
        error.statusCode,
        error.errors,
        error.warnings,
        error.dataErrors
      );
    } else if (error instanceof Exception) {
      request.response = responseManager.handleErrorResponse(error.statusCode, error.errors, error.warnings);
    } else {
      request.response = responseManager.handleErrorResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, [ErrorCode.ERR0000]);
    }
  };

  return {
    after: middlewareAfter,
    onError: middlewareOnError,
  };
};
