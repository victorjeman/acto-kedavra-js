import styled from 'styled-components'

import { ReadMore } from 'components/ReadMore/ReadMore'

export const ActorReadMore = styled(ReadMore)`
  p {
    color: #6e7191;
    font-size: 10px;
  }

  button {
    color: #f4b740;
    font-weight: 600;
    font-size: 12px;

    &:hover {
      color: #d49924;
    }
  }
`
