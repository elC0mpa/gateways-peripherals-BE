# gateways-peripherals-BE

This is a simple CRUD project which works with two entites:

- Gateways
- Peripherals

## Gateways:

### Model:

- Serial Number: String unique and required
- Label: String required
- Addres: String required which must be validated as a valid IP address
- Peripherals: [ObjectId] Associated peripherals to this gateway

### Endpoints:

- get(/gateway) -> returns all gateways
- get(/gateway/:id) -> return details for a specific gateway
- post(/gateway) -> creates a new gateway || serialNumber, label and address fields received in body
- delete(/gateway/:id) -> deletes a gateway

## Peripherals:

### Model:

- Gateway: ObjectId required, gateway to which this periperal is associated
- UID: Number required
- Vendor: String required
- CreatedAt: Date
- Status: Boolean

### Endpoints:

- get(/peripheral) -> returns all peripherals
- get(/peripheral/:id) -> return details for a specific peripheral
- post(/peripheral) -> creates a new peripheral || gateway, uid, vendor and status fields received in body
- delete(/peripheral/:id) -> deletes a peripheral

## Environment Variables

- MONGO_URL: specify connection URL to the mongo database
