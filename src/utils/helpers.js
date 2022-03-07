export function validateEmail(email) {
  const re = /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
  if (email.match(re)) {
    return true;
  }
  else {
    return false;
  }
}

export function checkField(input) {
  const field = '';
  if (input.match(field)) {
    return true;
  }
  return false;
}