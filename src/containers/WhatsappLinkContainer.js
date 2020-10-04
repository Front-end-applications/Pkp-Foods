import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { Whatsapp } from '../components'

export default function WhatsappContainer () {
    return (
        <Whatsapp href="https://api.whatsapp.com/send?phone=0123456789">
            <FaWhatsapp />
        </Whatsapp>
    )
}
