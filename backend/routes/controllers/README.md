# CHART CODE FOR ROUTE

## Logic

- 1/2 SECURE INPUT (avoid script injection) & CHECK CONFORMITY INPUT (to avoid integrity issues when editing multiple collections, if one fail because of validity)
- 2/2 PROCESS (handle not found case)

## Good Practices

- UpperCamelCase for routes files
- LowerCamelCase for routes folders
- handler structure

```javascript
/**
 * Request structure
 * req = { body: { } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async req => {
  const inputs = {};

  return inputs;
};

/**
 * PROCESS :
 */
const process = async inputs => {};

/**
 * LOGIC :
 */
const routeName = async (req, res) => {
  try {
    const inputs = await secure(req);

    const param = await process(inputs);

    res.status(200).json(param);
  } catch (error) {
    console.log("ERROR MESSAGE :", error.message);
    console.log("ERROR :", error);
    res.status(400).json({ message: error.message });
  }
};
module.exports = routeName;
```

## Structure

```javascript
routes
├── auth                   # Auth handlers
│   ├── LoginUser          # Login handlers
│   └── RegisterUser       # Register handlers
└── dashboard
    ├── ...
    |   └── ...
    └── ...
```
