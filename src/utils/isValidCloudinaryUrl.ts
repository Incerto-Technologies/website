export const isValidCloudinaryUrl = (url: string): boolean => {
  const cloudinaryUrlPattern =
    /^https?:\/\/res\.cloudinary\.com\/[a-z0-9_-]+\/image\/upload/;

  return cloudinaryUrlPattern.test(url);
};
