import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useAuth } from '../contexts/authContext'

const TheHeaderDropdown = () => {

const { currentUser, handleLogout} = useAuth();

async function submitLogout(e){
  e.preventDefault();
  await handleLogout();
  console.log('sass');
}

console.log(currentUser.email)


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
        
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Configurações</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Perfil
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Configuração
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user-follow" className="mfe-2" />
          Registrar usuarios
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem >
          <CIcon name="cil-lock-locked" className="mfe-2" />
          <CButton onClick={submitLogout} >Log out</CButton>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
