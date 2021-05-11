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

const Menus = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)


return (
  <CContainer>
    <CRow>
      <CCol sm="12" xl="6">
        <CCard>
          <CCardHeader>Cafés da manhã</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>até 4 torradas, geléia, chá claro, suco de frutas coado, água de coco e água a vontade</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Almoço</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>caldo de carne, sopa de legumes coada</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Lanche</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>suco de frutas coado, gelatina clara, chá claro, água de coco e água a vontade</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Janta</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>caldo de carne, sopa de legumes coada, gelatina clara, água de coco e água a vontade. </CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12" xl="6">
        <CCard>
          <CCardHeader>Descrição dos cafés da manhã</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>Não ingerir leite ou derivados. Será iniciada uma dieta sem resíduos</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Descrição dos almoços</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>NÃO INGERIR ALIMENTOS SÓLIDOS OU PASTOSOS</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Descrição dos lanches</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>NÃO INGERIR ALIMENTOS SÓLIDOS OU PASTOSOS</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Descrição do jantar</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>NÃO INGERIR ALIMENTOS SÓLIDOS OU PASTOSOS</CListGroupItem>
              </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Cadastrar alimentacao
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email">Periodo da refeicao</CLabel>
                <CInput type="email" id="nf-email" name="nf-email" placeholder="Entre o período, café, lanhce, almoco ou jantar" autoComplete="email"/>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-email">Refeicao</CLabel>
                <CInput type="email" id="nf-email" name="nf-email" placeholder="Entre o prato" autoComplete="email"/>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Descricao</CLabel>
                <CInput type="password" id="nf-password" name="nf-password" placeholder="Escreva a descricao do prato" autoComplete="current-password"/>
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

export default Menus;
