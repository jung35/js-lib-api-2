type ExternalId = {
  external_id: string;
  partner_id: number;
};

export type Profile = {
  id: number;
  url: string;
  internal_id: number,
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  email_notification: boolean;
  offer_notification: boolean;
  culture: string;
  member_uuid: string;
  verify_status: string;
  verify_message: string;
  external_ids: ExternalId[];
  has_ssn: boolean;
  has_dob: boolean;
  last_login: string;
  deauthorized_at: string;
  created_at: string;
  updated_at: string;
  verified_at: string;
};


export type ProfileUpdateBody = {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  ssn?: string;
  email_notification?: boolean;
  offer_notification?: boolean;
};

export type ProfileReq = {
  id: number;
};
