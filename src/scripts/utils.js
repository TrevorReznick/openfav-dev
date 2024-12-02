export const printFullObject = (obj) => {
  const fullString = JSON.stringify(obj, null, 2)
  console.log(fullString)
}