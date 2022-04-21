import React,{useState} from 'react'
import { questions } from './api'
import MyAccordion from './MyAccordion'
import '../compnent/style.css'
export default function Accordion() {
    const [data, setdata] = useState(questions)
  return (
    <>
       
            <section className='main-div'>
            <h1>Question & Answer</h1>
           {data.map((que)=>{
                const {id}=que
                return <MyAccordion key={id} {...que}/>
            })
        }
            </section>
          
    </>
  )
}
