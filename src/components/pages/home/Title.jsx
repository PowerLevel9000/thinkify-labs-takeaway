import React from 'react'

const Title = ({ title, subTitle, backgroundColor }) => {
  return (
    <div className="title-card" style={{ background: backgroundColor }}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title