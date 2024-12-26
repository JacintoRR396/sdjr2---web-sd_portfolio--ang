export enum ERROR_STORAGE_TYPE { LOCAL, SESSION, COOKIES }
export enum ERROR_STORAGE_METHOD_TYPE { LOAD, SAVE, REMOVE, REMOVE_ALL }

export const ERRORS_STORAGE_SELF = {
  NOT_FOUND: 'The #item does not exist in the store.',
}

export const ERRORS_STORAGE_HELPER = {
  DTO: '#dto',
  ITEM: '#item',
}

export const ERRORS_LOCAL_STORAGE = {
  LOAD: 'Load #dto in LocalStorage.',
  SAVE: 'Save #dto in LocalStorage.',
  REMOVE: 'Remove #dto in LocalStorage.',
  REMOVE_ALL: 'Remove all in LocalStorage.',
}

export const ERRORS_SESSION_STORAGE = {
  LOAD: 'Load #dto in SessionStorage.',
  SAVE: 'Save #dto in SessionStorage.',
  REMOVE: 'Remove #dto in SessionStorage.',
  REMOVE_ALL: 'Remove all in SessionStorage.',
}

export const ERRORS_COOKIES = {
  LOAD: 'Load #dto in Cookies.',
  SAVE: 'Save #dto in Cookies.',
  REMOVE: 'Remove #dto in Cookies.',
}

export const ERRORS_STORAGE = {
  SELF: ERRORS_STORAGE_SELF,
  LOCAL: ERRORS_LOCAL_STORAGE,
  SESSION: ERRORS_SESSION_STORAGE,
  COOKIES: ERRORS_COOKIES,
  HELPER: ERRORS_STORAGE_HELPER,
}
