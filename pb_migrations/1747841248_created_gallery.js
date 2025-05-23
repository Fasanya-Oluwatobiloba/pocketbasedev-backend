/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.collectionName = \"users\"",
    "deleteRule": "@request.auth.collectionName = \"users\"",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file83635035",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "Image",
        "presentable": false,
        "protected": false,
        "required": true,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "select4282022807",
        "maxSelect": 1,
        "name": "Category",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "Worship",
          "Events",
          "Community",
          "Mission"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text968978681",
        "max": 0,
        "min": 0,
        "name": "Caption",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_3598190544",
    "indexes": [],
    "listRule": null,
    "name": "gallery",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.collectionName = \"users\"",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3598190544");

  return app.delete(collection);
})
