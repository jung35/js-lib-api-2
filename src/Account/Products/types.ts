export type ProductScope = "contract" | "subscription";
export type ProductRate = "per-month" | "flat";
export type ProductType = "backreporting";

export type Product = {
  url: string;
  code: string;
  name: string;
  description: string;
  scope: ProductScope;
  cost: number;
  rate: ProductRate;
  max_unit_count: number;
  price: number;
  is_active: boolean;
  type: ProductType;
};

export type ProductsQuery = {
  promotion_code?: string;
  object_type: string;
  object_id: string;
};

export type ProductQuery = {
  code: string;
  promotion_code?: string;
};

export type ProductPurchaseBody = {
  code: string;
  object_url: string;
  payment_method_url: string;
  amount: number;
  promotion_code: string;
};
