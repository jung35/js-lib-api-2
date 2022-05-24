type UtilityProviderStatus = "active" | "suspended";

type UtilityProviderType = "gas" | "water" | "electric" | "wireless";

export type UtilityProviderQuery = {
  name: string;
  country: string;
  service_type: UtilityProviderType;
  status: UtilityProviderStatus;
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
