import React,{useState} from 'react'

export default function MyAccordion({question,answer}) {
    const [show, setshow] = useState(false)
  return (
      <>
  <div className="main-heading">
      <p onClick={()=>setshow(!show)}>{show? "➖" : "➕"}</p>
      <h3>{question}</h3>
  </div>
    { show &&  <p>{answer}</p>}
      </>
  )
}
