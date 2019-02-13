import React from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import styled from 'styled-components'

const Container = styled.div`
  border: solid 1px #ccc;
  padding: 24px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin: 24px 0 0;
`

const Buttons = styled.div`
  margin-bottom: 24px;
`

export class BarChart extends React.Component {
  state = {
    data: [5, 10, 1, 3],
    size: 500,
  }

  componentDidMount() {
    this.draw()
  }

  draw = () => {
    const _draw = () => {
      const { data, size } = this.state
      const node = this.node
      const dataMax = max(data)
      const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, size])

      select(node)
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')

      select(node)
        .selectAll('rect')
        .data(data)
        .exit()
        .remove()

      select(node)
        .selectAll('rect')
        .data(data)
        .style('fill', '#fe9922')
        .attr('x', (d, i) => i * 25)
        .attr('y', d => size - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', 25)
    }

    setImmediate(_draw)
  }

  bigger = () => {
    this.setState({ size: this.state.size + 50 })
    this.draw()
  }

  smaller = () => {
    this.setState({ size: this.state.size - 50 })
    this.draw()
  }

  add = () => {
    this.setState({ data: [...this.state.data, Math.random() * 100] })
    this.draw()
  }

  remove = () => {
    this.setState({ data: this.state.data.slice(0, -1) })
    this.draw()
  }

  render() {
    const { size } = this.state

    return (
      <Container size={size + 24}>
        <Buttons>
          <button onClick={this.bigger}>bigger</button>
          <button onClick={this.smaller}>smaller</button>
          <button onClick={this.add}>add</button>
          <button onClick={this.remove}>remove</button>
        </Buttons>
        <svg ref={ref => (this.node = ref)} width={size} height={size} />
      </Container>
    )
  }
}

export default BarChart
