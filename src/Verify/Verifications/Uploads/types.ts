export type VerificationUploadsQuery = {
  verification_id: number;
};

export type VerificationUpload = {
  id: number;
  url: string;
  s3_presigned_upload_url: string;
  filename: string;
  complete: boolean;
};

export type CreateVerificationUploadBody = {
  verification_id: number;
  filename: string;
};

export type CompleteVerificationUploadBody = {
  id: number;
  verification_id: number;
  complete: boolean;
};
