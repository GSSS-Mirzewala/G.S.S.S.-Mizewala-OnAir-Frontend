const ERRORS = {
  NETWORK_ERROR: {
    message: "Server is not responding. Try again later.",
    action: "SHOW_TOAST",
  },

  INTERNAL_SERVER_ERROR: {
    message: "Internal Server Error. Please Try again.",
    action: "SHOW_TOAST",
  },

  ACCOUNT_NOT_FOUND: {
    message: "Account doesn't exists!",
    action: "SHOW_TOAST",
  },

  WRONG_PASSWORD: {
    message: "Incorrect password. Please try again.",
    action: "SHOW_TOAST",
  },

  FAILED_TO_UPDATE_STATUS: {
    message: "Failed to Update Your Status.",
    action: "REDIRECT_HOME",
  },

  HELP_LIMITS_REACHED: {
    message: "You have reached your limits.",
    action: "SHOW_TOAST",
  },
};

export default ERRORS;
