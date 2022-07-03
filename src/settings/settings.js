export const ESCAPE_BTN_CODE = 'Escape'

export const WAIT_FOR_CSS_ANIMATION_TO_END = 400

export const ROUTES = {
  ACTORS: 'actors',
}

export const ACTOR_FORM_ADD = 'ADD'
export const ACTOR_FORM_EDIT = 'EDIT'

const SIZE = {
  MEDIUM: 768,
  LARGE: 1024,
}

export const MEDIA_SIZE = {
  SMALL: `only screen and (max-width: ${SIZE.MEDIUM - 1}px)`,
  MEDIUM: `only screen and (min-width: ${SIZE.MEDIUM}px) and (max-width: ${SIZE.LARGE - 1}px)`,
  LARGE: `only screen and (min-width: ${SIZE.LARGE}px)`,
}
