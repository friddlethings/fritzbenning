import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Column from '../../components/Grid/Column'
import Row from '../../components/Grid/Row'
import HeroTextTile from '../../components/HeroTextTile'
import Loading from '../../components/Loading'
import PageMeta from '../../components/PageMeta'
import PageTemplate from '../../components/PageTemplate'
import Stage from '../../components/Stage'
import Unit from '../../components/Unit'

const Frontpage: React.FC = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('pending')

  const confirmSubscription = async (key: string | string[]) => {
    await fetch(`../api/subscribe-to-newsletter?key=${key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setEmail(data.mail)
        setStatus(data.status)
      })
  }

  useEffect(() => {
    router.query.key && confirmSubscription(router.query.key)
  }, [router])

  return (
    <PageTemplate>
      <PageMeta title="Newsletter" description="Auf dieser Seite können Sie Ihre Newsletter-Anmeldung bestätigen."} />
      <Unit>
        <Row>
          <Column xs={12}>
            <Loading ready={status !== 'pending'}>
              <Stage
                title={
                  status !== 'subscribed'
                    ? 'Newsletter-Anmeldung fehlgeschlagen!'
                    : 'Newsletter-Anmeldung erfolgreich!'
                }
                subheadline={
                  status !== 'subscribed' ? (
                    <p>
                      Bitte überprüfe deine Internetverbindung oder probiere es
                      zu einem späteren Zeitpunkt erneut.
                    </p>
                  ) : (
                    <p>
                      Vielen Dank, ab jetzt erfährst du es mit am Ersten, wenn
                      ein neuer Beitrag veröffentlicht wird.
                    </p>
                  )
                }
              />
            </Loading>
          </Column>
        </Row>
      </Unit>
      <Unit>
        <Row>
          <Column xs={12}>
            <HeroTextTile id="background-anchor">
              <p>
                Ihre hinterlegte E-Mail Adresse: <strong>{email}</strong>
              </p>
            </HeroTextTile>
          </Column>
        </Row>
      </Unit>
      <Unit>
        <Row>
          <Column xs={12}>
            <Button label="Zurück zum Blog" />
          </Column>
        </Row>
      </Unit>
    </PageTemplate>
  )
}

export default Frontpage
