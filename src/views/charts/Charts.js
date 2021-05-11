import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartPie} from '@coreui/react-chartjs'
import { DocsLink } from '../reusable/index'


const Charts = () => {

  return (
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Média de Idade
          </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'Faixa etária dos pacientes',
                backgroundColor: '#f87979',
                data: [2,5,12,22,51,45,32]
              }
            ]}
            labels={['10-20','20-30','30-40','40-50','50-60','60-70','70-80']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

     

      <CCard>
        <CCardHeader>
          Gênero dos pacientes
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB'
                  ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB'
                ],
                data: [65, 35]
              }
            ]}
            labels={['Feminino','Masculino']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

      
    </CCardGroup>
  )
}

export default Charts
