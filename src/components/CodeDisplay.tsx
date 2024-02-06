

interface CodeDisplayProps {
  text: string;
}

const CodeDisplay = ({text}:CodeDisplayProps) => {
  return (
    <div className="code-Display">
      <div className="circle-Button-Container">
        <button className="left button"></button>
        <button className="middle button"></button>
        <button className="right button"></button>
      </div>
      <div className="code-Output">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CodeDisplay