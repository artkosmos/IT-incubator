import {ChangeEvent, ReactNode, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

type PropsType = {
  children: ReactNode
}

export const Task_3 = ({children}: PropsType) => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <div>Lags when change value</div>
      {/*<input type="text" value={value} onChange={onChange} />*/}
      <Input />
      {/*<SlowComponent />*/}
      {children}
    </div>
  )
}

//1. Обернуть в memo, чтобы убрать ререндер компонента
//2. Создать отдельный компонент Input и перенести стейт туда, как в task_1
//3. Пережать компонент через children в App.tsx, не будет ререндера, т.к. объект пропсов не меняется
//4. useRef для input


const Input = () => {
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }
  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
  )
}