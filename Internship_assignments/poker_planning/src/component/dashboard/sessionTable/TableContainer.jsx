import React from 'react'
import Body from './tableBody/Body'
import './TableContainer.scss'
import Header from './tableHeader/Header'
import useSession from '../../../hook/useSession'

const TableContainer = () => {
  const {sessions} =  useSession();
  console.log(sessions)

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