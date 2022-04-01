import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import MainPage from './Main_Page/MainPage.jsx'
import Header from './Global_Components/Header/Header.jsx'
import SideBar from './Global_Components/SideBar/SideBar.jsx'
import Form from './Form/Form.jsx'
import { useSelector } from 'react-redux'
import MainLoading from './Loading/MainLoading.jsx'
import Snake from '../Games/Snake/Snake.jsx'

const RightSide = styled.div`
    width: 100% !important;
    display: inline-block;
`

const StyledMainRoutes = styled.div` 
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
`

export default function MainRoutes() 
{
    const {authored, verified} = useSelector(state => state.user)
    if(authored !== undefined)
    {
        return (
            <BrowserRouter>
                <StyledMainRoutes>
                    <SideBar />
                    <RightSide>
                        <Header />
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            {
                                authored
                                ?
                                    <>
                                        <Route path='/account/verification' element={<Form login={false} verification={true} verified={verified} />} />
                                        <Route path='/games/snake-game' element={<Snake />} />
                                    </>
                                :
                                <>
                                    <Route path='/account/registration' element={<Form login={false} />} />
                                    <Route path='/account/log-in' element={<Form login={true} />} />
                                </>
                            }
                        </Routes>
                    </RightSide>
                </StyledMainRoutes>
            </BrowserRouter>
        )
    }
    return <MainLoading />
}
