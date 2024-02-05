import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

let app

export const createApp = () => {
  app = createRoot(document.getElementById('app'))
}

export const destroyApp = () => {
  app?.unmount?.()
  document.getElementById('app').innerHTML = ''
}

export const updateApp = (props) => {
  destroyApp()
  createApp()
  app.render(<DynamicComponent {...props} />)
}

function DynamicComponent({
  component: Component,
  selectedExample,
  afterRenderHook,
}) {
  if (afterRenderHook) {
    useEffect(async () => {
      await afterRenderHook?.()
    }, [])
  }
  return (
    <React.StrictMode>
      <Component {...selectedExample?.input} />
    </React.StrictMode>
  )
}
