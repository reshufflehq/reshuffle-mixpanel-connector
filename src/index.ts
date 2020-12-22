import { Reshuffle, BaseConnector } from 'reshuffle-base-connector'
import Mixpanel from 'mixpanel'

export interface MixpanelConnectorConfigOptions {
  token: string
  secret: string
}

export default class MixpanelConnector extends BaseConnector<MixpanelConnectorConfigOptions, null> {
  mixpanel: Mixpanel.Mixpanel

  constructor(app: Reshuffle, options: MixpanelConnectorConfigOptions, id?: string) {
    super(app, options, id)
    this.mixpanel = Mixpanel.init(options.token, { secret: options.secret })
  }

  track(eventName: string, properties?: Record<string, any>): void {
    properties ? this.mixpanel.track(eventName, properties) : this.mixpanel.track(eventName)
  }

  import(eventName: string, time: Date | number, properties?: Record<string, any>): void {
    properties
      ? this.mixpanel.import(eventName, time, properties)
      : this.mixpanel.import(eventName, time)
  }

  sdk(): Mixpanel.Mixpanel {
    return this.mixpanel
  }
}

export { MixpanelConnector }
