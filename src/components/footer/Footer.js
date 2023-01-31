import React from 'react';
import './Footer.css';
import {BiCopyright} from 'react-icons/bi';
import {MdEmail} from 'react-icons/md';

function Footer() {
  return (
    <footer>
      <p><a href="mailto: contact@mrkcbd.com"><MdEmail className="icon"/>contact@mrkcbd.com</a></p>
      <p><i><BiCopyright className="icon"/></i> 2023 Mr. K's Premium Reserve. All Rights Reserved.</p>
      </footer>
  )
}

export default Footer