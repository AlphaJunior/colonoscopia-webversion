import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Firebase from '../../../services/firebase/firebase'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Auth} from '../../../contexts/authContext'

const Login = () => {
  
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [routeRedirect,setRouteRedirect]= useState(false);
  const {state,dispatch} = useContext(Auth);

  const handleLogin = async(e)=>{
    let response = await Firebase.login(email,password)
    if(response.hasOwnProperty("message")){
      console.log(response.message);
    }
    else{
      setRouteRedirect(true);
      return dispatch({
        type:"LOGIN",
        payload: response.user
      })
    }
  }
  const redirect = routeRedirect;
  if(redirect){
    return <Redirect to="/"/>
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Entre suas credenciais para logar na sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Senha" value={password} autoComplete="current-password" onChange={(e)=>{setPassword(e.target.value)}}  />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleLogin}>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Examinare WebAdmin</h2>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
