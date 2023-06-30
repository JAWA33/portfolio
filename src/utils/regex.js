export const CLIENT_REGEX = /^[a-zA-Z0-9-_ '.]{2,50}$/;
export const MESSAGE_REGEX =
  /^[àùïîéèöôêëçA-Za-z0-9()/:+!?'&=;.,$€@%-_" (\r\n)]{10,3000}$/m;
export const CONTACT_NAME_REGEX = /^[a-zA-Z '-]{2,50}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9_.-]+[@]{1}[a-z0-9-_]+[.]+[a-z]{2,}$/;

//Pattern for CSS :

// export const CLIENT_PATTERN = "[àùïîéèöôêëça-zA-Z0-9-_ ']{0,50}";
// export const MESSAGE_PATTERN =
//   "[àùïîéèöôêëçA-Za-z0-9()/:+!?'&=;.,$€@%-_ (\r\n)]{10,50}";
// export const CONTACT_NAME_PATTERN = "[a-zA-Z ']{2,50}";
// export const EMAIL_PATTERN = "[a-zA-Z0-9_.-]+[@]{1}[a-z0-9-_]+[.][a-z]";

export default {
  CLIENT_REGEX,
  MESSAGE_REGEX,
  CONTACT_NAME_REGEX,
  EMAIL_REGEX,
  // CLIENT_PATTERN,
  // MESSAGE_PATTERN,
  // CONTACT_NAME_PATTERN,
  // EMAIL_PATTERN,
};
