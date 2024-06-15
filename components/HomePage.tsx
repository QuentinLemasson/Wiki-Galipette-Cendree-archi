import React from 'react'
import Layout from './misc/layout'
import Link from 'next/link'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Layout>
      <section className='mt-32'>
        <div>This is the "Galipette Cendrée Wiki HomePage"</div>
        <Link href="/Jeu/Combat">Mode de jeu - Combat</Link>
      </section>
    </Layout>
  )
}

export default HomePage