export const FORMAT = {
  DATE: 'dd/MM/yyyy',
  TIME: 'HH:mm:s',
  DATETIME: 'dd/MM/yyyy HH:mm:ss',
}

export const REG_EXP = {
  NAME_GNR: /^[A-Z][a-zñA-Záéíóú\\s/]/,
  EMAIL: /^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/,
  DESCRIPTION: /^[A-Z][a-zñA-Záéíóú\s._\-,;()¿?!¡=\d]{3,500}/,
  DESCRIPTION_LG: /^[A-Z][a-zñA-Záéíóú\s._\-,;()¿?!¡=\d]{3,2500}/,
}

export const CONST = {
  FORMAT: FORMAT,
  REG_EXP: REG_EXP,
}
