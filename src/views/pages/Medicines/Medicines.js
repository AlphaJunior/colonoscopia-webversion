import MedicinesDataService from "../../../services/firebase/MedicineDatabase";
import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CListGroup,
  CCardHeader,
  CListGroupItem,
  CInputGroup,
  CCardBody,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert,
} from "@coreui/react";

const Medicine = () => {
  const itens = MedicinesDataService.getAll().limitToLast();
  return (
    <CContainer>
      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>Remédios</CCardHeader>
            <CCardBody>
              <CListGroup>
                {itens.forEach((element) => {
                  <CListGroupItem>{element}</CListGroupItem>;
                })}
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Medicine;
