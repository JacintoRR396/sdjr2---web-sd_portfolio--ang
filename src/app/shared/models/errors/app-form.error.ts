export const ERRORS_FORM_HELPER = {
  NAME_CONTROL: '#nameControl',
  REQ_LENGTH: '#reqLength',
  ACT_LENGTH: '#actLength',
}

export const ERRORS_FORM_SELF = {
  NOT_VALID: 'The Form is not valid, please fill in all required fields.',
  CREDENTIALS: 'The Credentials are not valid.',
  ACC_INACTIVE: 'The account is not active, please contact the administrator.',
}

export const ERRORS_FORM_CONTROLS = {
  BASE_REQUIRED: 'The #nameControl is mandatory.',
  BASE_MIN_LENGTH: 'Your #nameControl must have minimum #reqLength chars, but it only has #actLength.',
  BASE_MAX_LENGTH: 'Your #nameControl must have maximum #reqLength chars, but it has #actLength.',
  BASE_FORMAT: 'Your #nameControl does not have a valid format.',
  EMAIL_FORMAT: 'Your email does not have a valid format, like "something@company.doamin".',
  EMAIL_EXISTS: 'Your email already exists, you must provide another one.',
  EMAIL_NOT_EXISTS: 'Your email does not exist, please check it and provide another one.',
  PWD_FORMAT: 'Your password must have at least one uppercase letter, one lowercase letter, one number and one special character like "@$!%*?&".',
  PWD_VERIFY: 'Your password does not match, please check it.',
}

export const ERRORS_FORM = {
  SELF: ERRORS_FORM_SELF,
  CONTROL: ERRORS_FORM_CONTROLS,
  HELPER: ERRORS_FORM_HELPER
}
