export const validateEmail = (email: string | null) => {
  let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  if (email === null) return false;

  // Validate email
  if (email.trim().length < 1) {
    return false;
  }

  // Validate email format
  if (email.trim().length > 0 && !emailRegex.test(email)) {
    return false;
  }

  return true;
};
