export const isValidCloudinaryUrl = (url: string) => {
  const cloudinaryUrlPattern =
    /^(https:\/\/res\.cloudinary\.com\/[a-zA-Z0-9_-]+\/image\/upload\/v\d+\/[a-zA-Z0-9_-]+\.\w+)$/;

  return cloudinaryUrlPattern.test(url);
};
