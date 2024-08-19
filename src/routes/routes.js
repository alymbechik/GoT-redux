import React, { useEffect } from 'react'
import { getCharacters } from '../requests/getCharacters'
import { useDispatch } from 'react-redux'
import {setData} from "../redux/slices/dataSlice"
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage/mainPage'
import DetailPage from '../pages/DetailPage/detailPage'

const MainRoutes = () => {

  const dispatch = useDispatch()

       useEffect(() => {
    ( async () => {
      try {
        const data = await getCharacters()
        dispatch(setData(data))
      } catch (error) {
        console.log(error);
      }
    } )()
  }, []);

  return (
    <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/:id'} element={<DetailPage/>}/>
    </Routes>
  )
}

export default MainRoutes