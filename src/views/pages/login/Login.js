import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
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
import { useAuth } from '../../../contexts/authContext'

const Login = () => {
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const [loading, setLoading] = useState(false)
  const {handleLogin} = useAuth()
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()
    try {
      setLoading(true)
      await handleLogin(email,password);
      history.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false)
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm  onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Entre suas credenciais para logar na sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="email" onChange={(e)=>setemail(e.target.value)} placeholder="Email" autoComplete="email" value={email} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Senha" autoComplete="current-password" value={password} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton disabled={loading} color="primary" className="px-4" type="submit">Login</CButton>
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
