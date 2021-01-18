## Reshuffle Mixpanel Connector

[Code](https://github.com/reshufflehq/reshuffle-mixpanel-connector) |
[npm](https://www.npmjs.com/package/reshuffle-mixpanel-connector) |


`npm install reshuffle-mixpanel-connector`

_ES6 import_: `import { MixpanelConnector } from 'reshuffle-mixpanel-connectors'`

This is a [Reshuffle](https://reshuffle.com) connector that provides an Interface to the [Mixpanel](https://mixpanel.com) Platform.

This connector uses [Mixpanel node](https://www.npmjs.com/package/mixpanel) package.

#### Example
```js
const { Reshuffle } = require('reshuffle')
const { MixpanelConnector } = require('reshuffle-mixpanel-connector')

const app = new Reshuffle()
const mixpanelConnector = new MixpanelConnector(app, {
    token: '<mixpanel-token>',
    secret: '<mixpanel-secret>',
})

mixpanelConnector.track('test', { key1: 'value1', key2: 'value2' })
```

### Table of Contents

[Setup Mixpanel](#setup)

[Configuration Options](#configuration)

#### Connector Events

N/A

#### Connector Actions

[Track](#track)

[Import](#import)

[SDK](#sdk) - Get a Mixpanel client


### <a name="setup"></a>Setup Mixpanel
Follow the instructions [here](https://help.mixpanel.com/hc/en-us/articles/115004502806)

### <a name="configuration"></a>Configuration Options
```typescript
export interface MixpanelConnectorConfigOptions {
    token: string
    secret: string
}
```

Example:
```typescript
const { Reshuffle } = require('reshuffle')
const { MixpanelConnector } = require('reshuffle-mixpanel-connector')

const app = new Reshuffle()
const mixpanelConnector = new MixpanelConnector(app, {
    token: '<mixpanel-token>',
    secret: '<mixpanel-secret>',
})
```

### Connector events
N/A

#### <a name="track"></a>Track

For tracking events
```typescript
track(eventName: string, properties?: Record<string, any>): void
```

#### <a name="import"></a>Import

For importing events
```typescript
import(eventName: string, time: Date | number, properties?: Record<string, any>): void
```

#### <a name="sdk"></a>SDK

Returns a Mixpanel client ([See details on npm](https://www.npmjs.com/package/mixpanel))

```typescript
 sdk() : Mixpanel.Mixpanel
```
See Mixpanel.Mixpanel class in [Mixpanel Node type](https://github.com/mixpanel/mixpanel-node/blob/master/lib/mixpanel-node.d.ts#L45)

Example using the sdk:
```typescript
const { Reshuffle } = require('reshuffle')
const { MixpanelConnector } = require('reshuffle-mixpanel-connector')

const app = new Reshuffle()
const mixpanelConnector = new MixpanelConnector(app, {
    token: '<mixpanel-token>',
    secret: '<mixpanel-secret>',
})
mixpanelConnector.sdk().import('action', Date.now())
```
