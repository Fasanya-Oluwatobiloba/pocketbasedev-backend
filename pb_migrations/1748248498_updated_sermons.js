/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2988540424")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.collectionName = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2988540424")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.collectionName = \"users\""
  }, collection)

  return app.save(collection)
})
