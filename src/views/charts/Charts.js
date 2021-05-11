import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import { DocsLink } from '../reusable/index'

const Gráficos = () => {

  return (
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Idade dos Participantes
          <DocsLink href="http://www.chartjs.org"/>
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'Faixa Etária',
                backgroundColor: '#f87979',
                data: [45, 20, 85, 39, 10, 40, 39, 80, 40, 20, 60, 75]
              }
            ]}
            labels='anos'
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
          Sexo dos Participantes
        </CCardHeader>
        <CCardBody>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [80,20 ]
              }
            ]}
            labels={['Homens', 'Mulheres']}
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
          Média da Avaliação dos Usuários
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: 'Play Store',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [1, 2, 3, 4, 5, 3, 4.2]
              },
              {
                label: 'App Store',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [3, 4, 2, 1, 4.5, 5, 3]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels="months"
          />
        </CCardBody>
      </CCard>
      
    </CCardGroup>
  )
}

export default Gráficos
