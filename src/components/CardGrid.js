import React from 'react'
import styled from 'styled-components'
import {breakpoints, columns} from '../constants'
import {above} from '../utils/responsive'

const mapBreakpoints = fn => Object.keys(breakpoints)
	.map(label => above[label]`${fn(breakpoints[label])}`)

const mapPropsBreakpoints = fn => props => Object.keys(props)
	.filter(prop => Object.keys(breakpoints).includes(prop))
	.map(label => above[label]`${fn(props[label])}`)

export const CardRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
	align-items: flex-start;
	margin-left: -6px;
	margin-right: -6px;
`

export const CardCell = styled.div`
	display: block;
	${mapPropsBreakpoints(value => `
		display: ${value > 0 ? 'inherit' : 'none'};
		width: ${(value / columns || 1) * 100 + '%'};
	`)}
`
