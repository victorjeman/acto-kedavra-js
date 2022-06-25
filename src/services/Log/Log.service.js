const error = ({ message }) => {
  console.log(
    `%cO crapat ceva!
    ${message}`,
    'color: #FFF; background: red',
  )
}

const warning = ({ message }) => {
  console.log(
    `%cVezi vezi, ca nu-i de bine!
    ${message}`,
    'color: #FFF; background: orange',
  )
}

export const Log = {
  error,
  warning,
}
