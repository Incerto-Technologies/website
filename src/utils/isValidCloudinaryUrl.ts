export const isValidCloudinaryUrl = (url: string): boolean => {
  const cloudinaryUrlPattern =
    /^https?:\/\/res\.cloudinary\.com\/[a-z0-9_-]+\/image\/upload\/v[0-9]+\/[a-z0-9_./-]+$/;

  return cloudinaryUrlPattern.test(url);
};
