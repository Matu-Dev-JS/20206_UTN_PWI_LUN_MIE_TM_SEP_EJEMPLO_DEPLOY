import React from 'react'
import './ContactOption.css'
import { formatMessageDate } from '../../utils/formatDate'

export default function ContactOption(props) {
  return (
     <div className="contact-option">
        <div className='contact-image-container'>
            {props.image
                ? <img src={props.image} alt={props.name} className="contact-image" />
                : <div className="contact-image-placeholder">{props.name.charAt(0).toUpperCase()}</div>
            }
        </div>
        <div className="contact-info">
            <h2 className="contact-name">{props.name}</h2>
            <p className="contact-preview">{props.lastMessage}</p>
        </div>
        <div className="contact-meta">
            <span className="contact-time">{formatMessageDate(props.lastMessageDate)}</span>
            {props.unreadMessages && (
                <span className="contact-badge">{props.unreadMessages}</span>
            )}
        </div>
    </div>
  )
}
