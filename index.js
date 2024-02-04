async function create(afterRenderHook) {
  try {
    const { createApp, destroyApp, updateApp } = await import(
      './src/ReactRenderer.jsx'
    )

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
