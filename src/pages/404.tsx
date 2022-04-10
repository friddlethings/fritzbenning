import React from 'react'
import PageMeta from '../components/PageMeta'
import PageTemplate from '../components/PageTemplate'

const NotFoundPage: React.FC = () => (
  <PageTemplate>
    <PageMeta title="404" description="Die Seite existiert leider nicht." />
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist.</p>
  </PageTemplate>
)

export default NotFoundPage
