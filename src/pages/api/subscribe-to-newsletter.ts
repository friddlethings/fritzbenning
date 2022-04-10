import base64 from 'base-64'
import Status from 'http-status-codes'
import { decipher } from '../../utils/cipher'

// GET -> http://localhost:3000/api/hello-world?email=mail@fritzbenning.de

export default async (request, response) => {
  if (request.method !== 'GET') {
    return response.status(Status.BAD_REQUEST).send('')
  }

  const listId = 13038
  const key = request?.query?.key ?? ''

  const username = process.env.MAILJET_API_KEY
  const password = process.env.MAILJET_PASSWORD

  const myDecipher = decipher(process.env.MAILJET_PASSWORD)
  const decryptedMail = myDecipher(key)

  let status = null

  const body = {
    Email: decryptedMail,
    Action: 'addforce'
  }

  const manageContact = await fetch(
    `https://api.mailjet.com/v3/REST/contactslist/${listId}/managecontact`,
    {
      method: 'POST',
      headers: new Headers({
        Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(body)
    }
  )

  if (manageContact.ok) {
    status = 'subscribed'
  } else {
    status = 'not subscribed'
  }

  return response.json({
    status,
    mail: decryptedMail
  })
}
