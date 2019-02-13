import React from 'react'
import { createSelector } from 'reselect'
import { Provider } from 'react-redux'
import store from './redux'
import Todo from './components/Todo'
import BarChart from './components/BarChart'
import styled from 'styled-components'

const Container = styled.div``

const Header = styled.div`
  background: #fff;
  border: solid 1px #eee;
`

const Title = styled.div`
  padding: 12px;
  line-height: 32px;
  max-width: 1024px;
  margin: auto;
`

const Body = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: auto;
`

const App = () => (
  <Container>
    <Header>
      <Title>Reselect Test</Title>
    </Header>
    <Provider store={store}>
      <Body>
        <Todo />
        <BarChart />
      </Body>
    </Provider>
  </Container>
)
export default App
