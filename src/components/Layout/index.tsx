import React, { FC, ReactNode } from 'react'
import Menu from 'components/Menu'

import {Wraper} from './style.component'

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <Wraper >
      {/* <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={url} />
      </Head> */}
      <Menu />
      <main>
        {children}
      </main>
    </Wraper>
  )
}

export default Layout
