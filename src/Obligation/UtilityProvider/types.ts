import { APICall } from "../../types";

type UtilityProviderStatus = "active" | "suspended";

type UtilityProviderType = "gas" | "water" | "electric" | "wireless";

export type UtilityProviderQuery = {
  name: string;
  country: string;
  service_type: UtilityProviderType;
};

export type UtilityProviderCreateBody = {
  service_type: UtilityProviderType;
  name: string;
  website?: string;
};

export type UtilityProviderItem = {
  id: string;
  url: string;
  name: string;
  status: UtilityProviderStatus;
  website: string;
  service_type: UtilityProviderType;
};

export type UtilityProviderObject = UtilityProviderItem[];

export type UtilityProviderActions = {
  GetUtilityProvider: APICall<UtilityProviderQuery, Array<UtilityProviderItem>>;
  CreateUtilityProvider: APICall<UtilityProviderCreateBody, UtilityProviderItem>;
};
