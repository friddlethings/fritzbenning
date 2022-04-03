import classNames from 'classnames'

export const responsiveProp = (styles, base, whenObj, property) => {
  return classNames(
    styles[`${property}-${base}`],
    whenObj.xs && styles[`${property}-xs-${whenObj.xs}`],
    whenObj.s && styles[`${property}-s-${whenObj.s}`],
    whenObj.m && styles[`${property}-m-${whenObj.m}`],
    whenObj.l && styles[`${property}-l-${whenObj.l}`],
    whenObj.xl && styles[`${property}-xl-${whenObj.xl}`]
  )
}
