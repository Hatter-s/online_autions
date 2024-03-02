/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j3bjihms96z9b9e",
    "created": "2024-03-02 15:22:31.047Z",
    "updated": "2024-03-02 15:22:31.047Z",
    "name": "reviews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "os2fdped",
        "name": "product_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "fv7mjfmd8yzx96s",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "nvx9yjqk",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "jtypa932",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rbh5hatr",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "acztbutg",
        "name": "stars",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 5,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j3bjihms96z9b9e");

  return dao.deleteCollection(collection);
})
