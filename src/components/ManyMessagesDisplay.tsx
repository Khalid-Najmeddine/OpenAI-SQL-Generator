import React from 'react'
import OneMessageDisplay from './OneMessageDisplay'

interface UserMessage {
  role: string;
  content: string;
}
interface MessagesDisplayProps {
  userMessages: UserMessage[];
}
const ManyMessagesDisplay = ({userMessages}:MessagesDisplayProps) => {
  return (
    <div className="many-Messages-Display">
      {userMessages.map((userMessage, _index) => 
        <OneMessageDisplay key={_index} message={userMessage}/>)}
    </div>
  )
}

export default ManyMessagesDisplay