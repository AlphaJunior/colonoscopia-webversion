import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CPagination,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CListGroup,
  CListGroupItem,
  CCardFooter,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CDropdown,
  CLabel,
  CSelect,
  CSwitch,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { DocsLink } from '../../reusable/index'

const Medicines = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)


return (
  <CContainer>
    <CRow>
      <CCol sm="12" xl="6">
        <CCard>
          <CCardHeader>Remédios Cadastrados</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>Manitol</CListGroupItem>
              <CListGroupItem>Dulcolax</CListGroupItem>
              <CListGroupItem>Vonau</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12" xl="6">
        <CCard>
          <CCardHeader>Receituário dos remédios</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>Ingerir 100ml de Manitol a 20% (04 frascos de 250 ml), diluído em gotas de limão.
                 Beber 1 copo a cada 10 minutos até acabar, 6:00 horas</CListGroupItem>
              <CListGroupItem>Ingerir 2 comprimidos de Dulcolax (Bisacodil),16:00 horas</CListGroupItem>
              <CListGroupItem>Ingerir 01 comprimido de Vonau flash 8mg (Ondansetrona) 15 minutos antes de iniciar a ingestão de Manitol, 21:45 horas</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Cadastrar remédio e receituário
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email">Remédio</CLabel>
                <CInput type="email" id="nf-email" name="nf-email" placeholder="Entre o remédio" autoComplete="email"/>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Receituário</CLabel>
                <CInput type="password" id="nf-password" name="nf-password" placeholder="Escreva o receituário" autoComplete="current-password"/>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Enviar</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Apagar</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12">
        <CFade timeout={300} in={showElements} unmountOnExit={true}>
          <CCard>
          </CCard>
        </CFade>
      </CCol>
    </CRow>
  </CContainer>
  );
};

export default Medicines;
