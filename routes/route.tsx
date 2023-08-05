// import { lazy } from 'react'
// import {Navigate} from 'react-router-dom'
import UpLoad from '../pages/UpLoad/index'
import SetFile from '../pages/SetFile/index'
import Download from '../pages/Download/index'

export default [
    {
      path: '/',
      element: <UpLoad/>
    },
    {
      path: '/setFile',
      element: <SetFile/>
    },
    {
      path: '/download',
      element: <Download/>
    }
  ]