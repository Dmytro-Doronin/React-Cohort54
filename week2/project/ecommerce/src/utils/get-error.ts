import type { ApiError } from "../api/base-api";

const isRecord = (v: unknown): v is Record<string, unknown> =>
    typeof v === "object" && v !== null;

const isApiError = (v: unknown): v is ApiError =>
    isRecord(v) && typeof v.type === "string";

export const getErrorMessage = (err: unknown): string => {
    if (isApiError(err)) {
        if (err.type === "OFFLINE") {
            return "No internet connection.";
        }
        if (err.type === "NETWORK")
            return "Network error. Please try again later.";
        if (err.type === "HTTP") {
            if (err.status === 404) {
                return "Resource not found (404).";
            }
            if (err.status === 401 || err.status === 403) {
                return "Access denied (authentication/permissions).";
            }

            if (err.status >= 500) {
                return "Server error. Please try again later.";
            }
            return `Request failed: ${err.status}.`;
        }
    }

    if (err instanceof Error) {
        return err.message;
    }
    if (typeof err === "string") {
        return err;
    }

    if (isRecord(err) && typeof err.error === "string") {
        return err.error;

    }
    return "Unknown error";
};