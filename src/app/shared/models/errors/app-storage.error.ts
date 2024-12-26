export enum ERROR_STORAGE_TYPE { LOCAL, SESSION, COOKIES }
export enum ERROR_STORAGE_METHOD_TYPE { LOAD, SAVE, REMOVE }

export const ERRORS_STORAGE_HELPER = {
  DTO: '#dto',
}

export const ERRORS_LOCAL_STORAGE = {
  LOAD: 'Load #dto in LocalStorage',
  SAVE: 'Save #dto in LocalStorage',
  REMOVE: 'Remove #dto in LocalStorage',
}

export const ERRORS_SESSION_STORAGE = {
  LOAD: 'Load #dto in SessionStorage',
  SAVE: 'Save #dto in SessionStorage',
  REMOVE: 'Remove #dto in SessionStorage',
}

export const ERRORS_COOKIES = {
  LOAD: 'Load #dto in Cookies',
  SAVE: 'Save #dto in Cookies',
  REMOVE: 'Remove #dto in Cookies',
}

export const ERRORS_STORAGE = {
  LOCAL: ERRORS_LOCAL_STORAGE,
  SESSION: ERRORS_SESSION_STORAGE,
  COOKIES: ERRORS_COOKIES,
  HELPER: ERRORS_STORAGE_HELPER,
}
