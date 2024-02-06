import { FcApproval } from "react-icons/fc";

interface UserMessage {
  role: string,
  content: string
}

interface MessageDisplayProps {
  message: UserMessage
}

const OneMessageDisplay = ({message}:MessageDisplayProps) => {
  return (
    <div className="one-Message-Display">
      <p id="icon"><FcApproval size={25}/></p>
      <p>{message.content}</p>
      
    </div>
  )
}

export default OneMessageDisplay