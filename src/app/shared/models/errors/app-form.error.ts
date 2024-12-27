export const ERRORS_FORM_HELPER = {
  NAME_CONTROL: '#nameControl',
  REQ_LENGTH: '#reqLength',
  ACT_LENGTH: '#actLength',
}

export const ERRORS_FORM_SELF = {
  NOT_VALID: 'The Form is not valid.',
  CREDENTIALS: 'The Credentials are not valid.',
  ACC_INACTIVE: 'The account is not active, please contact the administrator.',
}

export const ERRORS_FORM_CONTROLS = {
  BASE_REQUIRED: 'The #nameControl is mandatory.',
  BASE_MIN_LENGTH: 'Your #nameControl must have minimum #reqLength chars, but it only has #actLength.',
  BASE_MAX_LENGTH: 'Your #nameControl must have maximum #reqLength chars, but it has #actLength.',
  BASE_FORMAT: 'Your #nameControl does not have a valid format.',
  EMAIL: 'Your email does not have a valid format, like "something@company.doamin".',
  PASSWORD: 'Your password must have at least one uppercase letter, one lowercase letter, one number and one special character like "@$!%*?&".',
}

export const ERRORS_FORM = {
  SELF: ERRORS_FORM_SELF,
  CONTROL: ERRORS_FORM_CONTROLS,
  HELPER: ERRORS_FORM_HELPER
}
