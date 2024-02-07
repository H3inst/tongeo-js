import type { AppError } from "../common/AppError";

export type ErrorTypes = AppError | Error;

export interface HttpStatusCodes {
    ok: number;
    created: number;
    accepted: number;
    noContent: number;

    multipleChoices: number;
    movedPermanently: number;
    found: number;
    seeOther: number;

    badRequest: number;
    unauthorized: number;
    forbidden: number;
    notFound: number;
    methodNotAllowed: number;
    notAcceptable: number;
    requestTimeout: number;
    conflict: number;

    internalServerError: number;
    notImplemented: number;
    badGateway: number;
    serviceUnavailable: number;
    gatewayTimeout: number;
}
