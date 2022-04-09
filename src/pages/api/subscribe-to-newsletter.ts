import base64 from 'base-64'
import Status from 'http-status-codes'

// GET -> http://localhost:3000/api/hello-world?email=mail@fritzbenning.de

export default async (request, response) => {
  if (request.method !== 'GET') {
    return response.status(Status.BAD_REQUEST).send('')
  }

  const listId = 13038
  const email = request?.query?.email ?? ''

  const username = process.env.MAILJET_API_KEY
  const password = process.env.MAILJET_PASSWORD

  let status = null
  let subscriberCount = 0

  await fetch(`https://api.mailjet.com/v3/REST/contactslist/${listId}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.json())
    .then(data => {
      subscriberCount = data['Data'][0]['SubscriberCount']
    })

  const body = {
    Email: email,
    Action: 'addforce'
  }

  await fetch(
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
    .then(response => response.json())
    .then(data => {
      console.log(data)
      status = data['Data'][0]['Email'] ? 'success' : 'error'
    })

  return response.json({
    email: `${email}`,
    subscriberCount: subscriberCount,
    status: status
  })
}
