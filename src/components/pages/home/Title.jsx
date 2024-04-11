import React from 'react'

const Title = ({ title, subTitle, backgroundColor, style = {} }) => {
  return (
    <div className="title-card" style={{ ...style, background: backgroundColor }}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title