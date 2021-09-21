import React, { Fragment } from 'react'
import { aboutApp } from './landing_page_styles'

const Landing = ({ user }) => (
  <>
    <div style={aboutApp} >
      <h1 className="title">{'< SYNTAX />'}</h1>
      <p className="description">
      Always missing a semicolon or curly brace in JavaScript? Can&apos;t ever get the indentation right in Python? Tired of having to pause to look down to find the carrot to open a tag instead of the carrot to close it? It&apos;s all about muscle memory baby! Syntax is here to help you set the goals, do the work and build that muscle memory you need to be a syntactically correct, code typing master.
      </p>
    </div>
  </>
)

export default Landing
