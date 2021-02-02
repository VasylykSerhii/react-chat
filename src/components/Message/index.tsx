import { Wrapper } from './style.component'
import { IChatMessages } from '@/pages/Chat'

type Props = {
  message: IChatMessages,
  key?: string
}

const Message = ({ message, key }: Props): JSX.Element => {
  return (
    <Wrapper >
    </Wrapper>
  )
}

export default Message
