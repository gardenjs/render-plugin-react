import { createApp, destroyApp, updateApp } = from './src/ReactRenderer.jsx'
    )
async function create(afterRenderHook) {
  try {
    createApp()

    return {
      destroy: () => destroyApp(),
      updateComponent: (props) => {
        updateApp({ ...props, afterRenderHook })
      },
    }
  } catch (e) {
    console.error(e)
  }
}

export default { create }
