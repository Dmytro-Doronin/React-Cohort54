export const baseUrl = "https://fakestoreapi.com";

export type ApiError =
    | { type: "OFFLINE" }
    | { type: "HTTP"; status: number; url: string }
    | { type: "NETWORK"; url: string };

export const fetchJson = async <T>(url: string): Promise<T> => {
    if (!navigator.onLine) {
        throw { type: "OFFLINE" } as ApiError;
    }

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw { type: "HTTP", status: res.status } as ApiError;
        }

        return (await res.json()) as T;
    } catch (e) {
        if (typeof e === "object" && e && "type" in e) {
            throw e;
        }
        throw { type: "NETWORK" } as ApiError;
    }
};
