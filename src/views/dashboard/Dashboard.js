import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Uso da aplicacao</h4>
              <div className="small text-muted">Maio 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <strong>100 usuarios </strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <strong>Atendimentos (30%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <strong>23 cadastros (30%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Ultimas Avaliacoes para pesquisa
            </CCardHeader>
            <CCardBody>
              <br />
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Usuario</th>
                    <th>Avaliacao</th>
                    <th>Descricao</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                    </td>
                    <td>
                      <div>Diogenes da Silva</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>2.5 estrelas</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td>
                      <div className="small text-muted">Pouco intuitivo...</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                    </td>
                    <td>
                      <div>Tarc??sio Amorim</div>
                      <div className="small text-muted">
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>1 estrela</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="10" />
                    </td>
                    <td>
                      <div className="small text-muted">PESSIMO</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                    </td>
                    <td>
                      <div>Vanessa Oliveira</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>4 estelas</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="warning" value="74" />
                    </td>
                    <td>
                      <div className="small text-muted">Me senti muito acolhida...</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                    </td>
                    <td>
                      <div>Juliana da Mata</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>4.7%</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="danger" value="98" />
                    </td>
                    <td>
                      <div className="small text-muted">ADOREI A IDEIA DA...</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                    </td>
                    <td>
                      <div>Adamastor Fernandes</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>2.2 estrelas</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="22" />
                    </td>
                    <td>
                      <div className="small text-muted">Muito texto pequeno pra ler</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                    </td>
                    <td>
                      <div>Davson Ines</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>3.3 estrelas</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="43" />
                    </td>
                    <td>
                      <div className="small text-muted">N??o rodou no meu telefone dir...</div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
