import React from 'react'
import Skill from './Skill'

const SkillList = () => {
  return (
    <div className='skill-list'>
        <Skill skill="Left-Handers" emoji="✊🏻👊🏻🤙🏻" color="#FF474C"/>
        <Skill skill="Master Mind" emoji="😏" color="#FF474C"/>
        <Skill skill="Alien" emoji="👊🏻" color="#FF474C"/>
        <Skill skill="Smiling Evil" emoji="😈" color="#FF474C"/>
        <Skill skill="G.O.A.T" emoji="🐐" color="#FF474C"/>
    </div>
  )
}

export default SkillList