export const randomIntFromInterval = (min: number, max: number) => {
  return (
    Math.floor(Math.random() * (max * 100 - min * 100 + 1) + min * 100) / 100
  )
}
