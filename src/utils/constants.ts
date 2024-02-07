import type { HttpStatusCodes } from "./types";

export const STATUS_CODES = Object.freeze<HttpStatusCodes>({
    // Success
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204,

    // Redirect
    multipleChoices: 300,
    movedPermanently: 301,
    found: 302,
    seeOther: 303,

    // Client errors
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    requestTimeout: 408,
    conflict: 409,

    // Server errors
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
});