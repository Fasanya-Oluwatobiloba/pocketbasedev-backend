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
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation2119065662",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Preacher",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2133451414",
        "max": 0,
        "min": 0,
        "name": "Duration",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file2356357532",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "Audio_file",
        "presentable": false,
        "protected": false,
        "required": true,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "file1121098988",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "Cover_image_file",
        "presentable": false,
        "protected": false,
        "required": true,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "number4060786062",
        "max": null,
        "min": null,
        "name": "Download_counts",
        "onlyInt": false,
        "presentable": false,
        "required": true,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_2988540424",
    "indexes": [],
    "listRule": "@request.auth.id != \"\"",
    "name": "sermons",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.collectionName = \"users\"",
    "viewRule": "@request.auth.id != \"\""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2988540424");

  return app.delete(collection);
})
