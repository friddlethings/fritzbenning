import React, { useState } from 'react'
import { ArrowLeft } from 'react-feather'
import validator from 'validator'
import Button from '../Button'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import Notification from '../Notification'
import Input from '../_forms/Input'
import styles from './styles.module.scss'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [status, setStatus] = useState('waiting')

  // useEffect(() => {
  //   fetch('./api/subscribe-to-newsletter?email=benning@neoskop.de')
  //     .then(response => response.json())
  //     .then(data => {
  //       setEmail(data.email)
  //       console.log(data)
  //     })
  // }, [])

  const subscribeToNewsletter = async event => {
    event.preventDefault()

    if (validator.isEmail(email)) {
      await fetch(`./api/subscribe-to-newsletter?email=${email}`)
        .then(response => response.json())
        .then(data => {
          setStatus(data.status)
          setEmail(data.email)
          console.log(data)
        })
    } else {
      setInvalid(true)
    }
  }

  const resetForm = () => {
    setEmail('')
    setStatus('waiting')
  }

  return (
    <Row align="center">
      <Column xs={12} m={12} l={6}>
        <div className={styles.text}>
          <h4>Neuer Beitrag ist online? Ping!</h4>
          <p>NEU: Updates zu unserer Weltreise.</p>
        </div>
      </Column>
      <Column xs={12} m={12} l={6}>
        {status === 'waiting' ? (
          <form
            className={styles.form}
            name="newsletter-subscription"
            onSubmit={subscribeToNewsletter}
          >
            <Input
              type="email"
              label="E-Mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
              error={invalid}
              errorMessage="Die E-Mail ist unvollständig oder ungültig."
            />
            <Button
              onClick={subscribeToNewsletter}
              label="Newsletter abonnieren"
              type="submit"
            />
          </form>
        ) : (
          <div className={styles.message}>
            {status === 'success' && (
              <Notification type="success">
                Du hast dich erfolgreich angemeldet.
              </Notification>
            )}
            {status === 'error' && (
              <Notification type="error">
                Die Anmeldung ist leider fehlgeschlagen.
              </Notification>
            )}
            <span className={styles.link} onClick={resetForm}>
              <ArrowLeft size={16} />
              Zurück
            </span>
          </div>
        )}
      </Column>
    </Row>
  )
}

export default Newsletter
