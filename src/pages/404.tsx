import React from 'react'
import PageTemplate from '../components/PageTemplate'
import Seo from '../components/Seo'

const NotFoundPage: React.FC = () => (
  <PageTemplate>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist.</p>
  </PageTemplate>
)

export default NotFoundPage
