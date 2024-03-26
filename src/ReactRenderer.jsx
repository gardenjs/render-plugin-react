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
  decorators,
}) {
  if (afterRenderHook) {
    useEffect(() => {
      afterRenderHook?.()
    }, [Component, selectedExample])
  }
  if (decorators?.length > 0) {
    const Decorator = decorators[0]
    return (
      <Decorator>
        <DynamicComponent
          component={Component}
          selectedExample={selectedExample}
          afterRenderHook={afterRenderHook}
          decorators={decorators.slice(1)}
        ></DynamicComponent>
      </Decorator>
    )
  }
  return (
    <React.StrictMode>
      <Component {...selectedExample?.input} />
    </React.StrictMode>
  )
}
