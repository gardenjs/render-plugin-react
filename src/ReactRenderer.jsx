import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

let app

export const createApp = () => {
  app = createRoot(document.getElementById('garden_app'))
}

export const destroyApp = () => {
  app?.unmount?.()
  document.getElementById('garden_app').innerHTML = ''
}

export const updateApp = (props) => {
  app?.render(<DynamicComponent {...props} />)
}

function DynamicComponent({
  component: Component,
  selectedExample,
  afterRenderHook,
}) {
  if (afterRenderHook) {
    useEffect(() => {
      afterRenderHook?.()
    }, [Component, selectedExample])
  }
  return (
    <React.StrictMode>
      <Component {...selectedExample?.input} />
    </React.StrictMode>
  )
}
