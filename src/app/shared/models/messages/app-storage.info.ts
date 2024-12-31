export enum INFO_STORAGE_TYPE { LOCAL, SESSION, COOKIES }
export enum INFO_STORAGE_METHOD_TYPE { LOAD, SAVE, REMOVE, REMOVE_ALL }

export const INFO_STORAGE_HELPER = {
  DTO: '#dto',
  ITEM: '#item',
}

export const INFO_LOCAL_STORAGE = {
  LOAD: 'Load #dto in LocalStorage.',
  SAVE: 'Save #dto in LocalStorage.',
  REMOVE: 'Remove #dto in LocalStorage.',
  REMOVE_ALL: 'Remove all in LocalStorage.',
}

export const INFO_SESSION_STORAGE = {
  LOAD: 'Load #dto in SessionStorage.',
  SAVE: 'Save #dto in SessionStorage.',
  REMOVE: 'Remove #dto in SessionStorage.',
  REMOVE_ALL: 'Remove all in SessionStorage.',
}

export const INFO_COOKIES = {
  LOAD: 'Load #dto in Cookies.',
  SAVE: 'Save #dto in Cookies.',
  REMOVE: 'Remove #dto in Cookies.',
}

export const INFO_STORAGE = {
  LOCAL: INFO_LOCAL_STORAGE,
  SESSION: INFO_SESSION_STORAGE,
  COOKIES: INFO_COOKIES,
  HELPER: INFO_STORAGE_HELPER,
}
