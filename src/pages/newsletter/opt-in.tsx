import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Button from '../../components/Button'
import Column from '../../components/Grid/Column'
import Row from '../../components/Grid/Row'
import HeroTextTile from '../../components/HeroTextTile'
import PageTemplate from '../../components/PageTemplate'
import Stage from '../../components/Stage'
import Unit from '../../components/Unit'

const Frontpage: React.FC = () => {
  const router = useRouter()

  const confirmSubscription = async (email: string | string[]) => {
    await fetch(`../api/subscribe-to-newsletter?email=${email}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  useEffect(() => {
    console.log('Fired!')
    confirmSubscription(router.query.email)
  }, [router])

  return (
    <PageTemplate>
      <Unit>
        <Row>
          <Column xs={12}>
            <Stage
              title="Newsletter-Anmeldung erfolgreich!"
              subheadline={
                <p>
                  Vielen Dank, ab jetzt erfährst du es mit am Ersten, wenn ein
                  neuer Beitrag veröffentlicht wird.
                </p>
              }
            />
          </Column>
        </Row>
      </Unit>
      <Unit>
        <Row>
          <Column xs={12}>
            <HeroTextTile>
              <p>
                Ihre hinterlegte E-Mail Adresse:{' '}
                <strong>{router.query.email}</strong>
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
