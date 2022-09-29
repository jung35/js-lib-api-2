export type Address = {
    id: number;
    url: string;
    street: string;
    unit?: string | null;
    city: string;
    state: string;
    zip: string;
    is_current: boolean;
};

export type AddressCreateBody = {
    street?: string;
    unit?: string;
    city?: string;
    state?: string;
    zip?: string;
    is_current?: boolean;
};

export type AddressQuery = {
    street?: string;
    unit?: string;
    city?: string;
    state?: string;
    zip?: string;
}
