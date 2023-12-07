import React, { FC, useRef, useState } from 'react';



interface EventsExampleProps {
  
}
 
const EventsExample: FC<EventsExampleProps> = () => {

const [value, setValue] = useState<string>('')
const [isDrag, setIsDrag] = useState<boolean>(true)
const inputRef = useRef<HTMLInputElement>(null)

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
}
const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(inputRef.current?.value);
}

const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
  console.log('DRAG');
  
}

const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  setIsDrag(true)
}

const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  setIsDrag(false)
  console.log('DROP');
  
}

const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  setIsDrag(false)
}

  return (
    <div style={{padding: '15px 0'}}>
      <input ref={inputRef} type='text' placeholder='Uncontrollable'/>
      <input
      value={value}
      type="text"
      placeholder='Controllable'
      onChange={changeHandler}
       />
      <button onClick={clickHandler} style={{marginLeft: 20}}>Click</button>
      <div 
        draggable
        onDrag={dragHandler} 
        style={{width: 200, height: 200, background: 'red', margin: '0 10px', display: 'inline-block'}}
      ></div>
      <div 
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', display: 'inline-block'}}
      ></div>
    </div>
  );
}
 
export default EventsExample;