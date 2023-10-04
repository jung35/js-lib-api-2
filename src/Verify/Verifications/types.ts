export type VerificationType = "user" | "identity";
export type VerificationStatus =
  | "initiated"
  | "pending"
  | "failed"
  | "new"
  | "trusted"
  | "denied"
  | "in_progress"
  | "waiting for info"
  | "renew"
  | "closed";

export type VerificationsQuery = {
  type?: VerificationType;
};

export type Verification = {
  status: VerificationStatus;
  type: VerificationType;
};

export type VerifcationPrecheck = {
  verification_required: true | false | "unavailable";
};
