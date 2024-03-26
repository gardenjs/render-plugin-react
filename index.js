async function create(afterRenderHook, decorators) {
  try {
    const { createApp, destroyApp, updateApp } = await import(
      './src/ReactRenderer.jsx'
    )
    createApp()
    return {
      destroy: () => destroyApp(),
      updateComponent: (props) => {
        updateApp({ ...props, afterRenderHook, decorators })
      },
    }
  } catch (e) {
    console.error(e)
  }
}

export default { create }
