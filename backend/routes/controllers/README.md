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

/**
 * PROCESS :
 */

/**
 * LOGIC :
 */
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
