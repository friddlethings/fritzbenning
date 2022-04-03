import classNames from 'classnames'

export const responsiveProp = (styles, base, whenObj, classname) => {
  const breakpoints = ['s', 'm', 'l', 'xl']

  const responsiveClasses = breakpoints.map(
    breakpoint =>
      whenObj[breakpoint] &&
      styles[`${classname}-${breakpoint}-${whenObj[breakpoint]}`]
  )

  return classNames(styles[`${classname}-${base}`], responsiveClasses)
}
