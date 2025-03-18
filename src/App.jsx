import { useState } from 'react'
import { Provider } from "react-redux";
import store from "./reDDdux/store";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '~/components/cards'
import AccountForm from "~/components/accounts/AccountForm";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Provider store={store}>
          <AccountForm />
        </Provider>
      </div>
    </>
  )
}

export default App
