export default (dispatch, asteroid) => {
  asteroid.ddp.on('added', ({ collection, fields, id }) => {
    if (collection == 'contacts') {
      dispatch({
        type: 'DDP_ADDED',
        response: { collection, doc: { id, ...fields } },
      })
    }
  })
  asteroid.ddp.on('changed', ({ collection, fields, id }) => {
    console.log("CHANGED asteroid.ddp.on", fields, id);

    dispatch({
      type: 'DDP_CHANGED',
      response: { collection, doc: { id, ...fields } },
    })
  })
  asteroid.ddp.on('removed', ({ collection, id }) => {
    dispatch({
      type: 'DDP_REMOVED',
      response: { collection, id },
    })
  })
}
