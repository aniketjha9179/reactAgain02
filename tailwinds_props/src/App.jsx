import React from 'react'
import Card from './components/Card'

function App() {
  let myObeject ={
    userName:'aj',
    age:21,

  }
  let newArray =[1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 flex justify-center rounded-md text-black '> hello bro</h1>
    <Card username='chai aur code' btnText='clickme'  />
    <Card   username='nunnu'   />

     
    </>
  )
}

export default App
