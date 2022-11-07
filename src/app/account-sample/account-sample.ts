import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent);

@customElement('app-account-sample')
export default class AccountSample extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-button class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button class="button">
          <span class="material-icons">
            add
          </span>
          <span>Button</span>
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" class="button">
          <span class="material-icons">
            add
          </span>
          <span>Button</span>
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" class="button">
          <span class="material-icons">
            add
          </span>
          <span>Button</span>
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
      <div class="column-layout group_1"></div>
    `;
  }
}
