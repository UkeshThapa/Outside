import React from 'react'
import Body from './tableBody/Body'
import './TableContainer.scss'
import Header from './tableHeader/Header'
import useSession from '../../../hook/useSession'

const TableContainer = () => {
  const {sessions,deleteSession} =  useSession();
  console.log(sessions)

  function handleSessionId(id){
    console.log(id)
    deleteSession({session_id:id,action:'deleteSessionById'})
  }


  return (
    <div className='table-container'>
      <table className='session-table'>
        <thead>
          <Header/>
        </thead>
        <tbody>
          {
            sessions.map((session, index)=>{
              return(
                <Body
                  key={index}
                  session={session}   
                  handleSessionId={handleSessionId}
                />
              )
            }

            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableContainer