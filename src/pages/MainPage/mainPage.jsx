import React from 'react'
import { useSelector } from 'react-redux';

const MainPage = () => {
  const characters = useSelector( state => state.data)
  console.log(characters);
  return (
    <div>
        {characters.data.map((item,idx) => {
          return (
            <div key={idx}>
              {item.fullName}
            </div>
          )
        })}
    </div>
  )
}

export default MainPage