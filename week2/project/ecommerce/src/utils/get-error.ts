type ApiError = { error: string }

const isRecord = (v: unknown): v is Record<string, unknown> =>
    typeof v === "object" && v !== null

const hasStringError = (v: unknown): v is ApiError =>
    isRecord(v) && typeof v.error === "string"

export const getErrorMessage = (err: unknown): string => {
    if (err instanceof Error) {
        return err.message
    }

    if (typeof err === "string") {
        return err
    }

    if (hasStringError(err)) {
        return err.error
    }

    return "Unknown error"
}