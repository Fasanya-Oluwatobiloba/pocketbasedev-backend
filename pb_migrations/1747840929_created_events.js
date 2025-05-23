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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3942078319",
        "max": 0,
        "min": 0,
        "name": "Title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date179083332",
        "max": "",
        "min": "",
        "name": "Date",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date3483776891",
        "max": "",
        "min": "",
        "name": "Time",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2817059741",
        "max": 0,
        "min": 0,
        "name": "Location",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3950563313",
        "max": 0,
        "min": 0,
        "name": "Description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
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
      }
    ],
    "id": "pbc_1687431684",
    "indexes": [],
    "listRule": "",
    "name": "events",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.collectionName = \"users\"",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684");

  return app.delete(collection);
})
