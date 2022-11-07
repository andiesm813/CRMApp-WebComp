import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcExpansionPanelComponent, IgcIconComponent, IgcRippleComponent, IgcTabsComponent } from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcExpansionPanelComponent);

@customElement('app-account-sample')
export default class AccountSample extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 0px 2px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: space-between;
      position: relative;
      padding: 20px;
      min-width: 50px;
      min-height: 50px;
    }
    .row-layout {
      display: flex;
    }
    .account-header {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .page-title-1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_1 {
      background-color: rgba(71, 124, 41, 0.2);
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      width: 48px;
      height: 48px;
    }
    .group_2 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 24px 0 0;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_7 {
      background-color: hsla(var(--ig-gray-100));
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 12px;
      overflow: auto;
      position: relative;
      padding: 12px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 16px;
      min-width: 576px;
      flex-grow: 2;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .group_10 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 16px;
      min-width: min-content;
      flex-grow: 1;
    }
    .image {
      object-fit: cover;
      width: 20px;
      height: 20px;
      min-height: 0;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      color: hsla(var(--ig-primary-500));
      height: max-content;
      min-width: min-content;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: absolute;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button::part(base) {
      color: hsla(var(--ig-primary-900));
      background-color: hsla(var(--ig-secondary-100));
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout account-header">
          <div class="row-layout page-title-1">
            <div class="row-layout group_1">
              <img src="/src/assets/Accounts Icon - Green.svg" class="image" />
            </div>
            <div class="column-layout group_2">
              <h6 class="content">
                Around the Horn
              </h6>
              <p class="typography__body-2 text">
                Brewing Company
              </p>
            </div>
          </div>
          <div class="row-layout group_3">
            <div class="column-layout group_4">
              <p class="typography__subtitle-2 content">
                Primary Contact
              </p>
              <p class="typography__caption text">
                Thomas Hardy
              </p>
              <p class="typography__caption text">
                Sales Representative
              </p>
            </div>
            <div class="column-layout group_4">
              <p class="typography__subtitle-2 content">
                Phone
              </p>
              <p class="typography__caption text">
                (123) 456-7890
              </p>
            </div>
            <div class="column-layout group_4">
              <p class="typography__subtitle-2 content">
                Billing Address
              </p>
              <p class="typography__caption text">
                120 Hanover Sq.
              </p>
              <div class="column-layout group_5">
                <p class="typography__caption text">
                  London,  WA1 1DP
                </p>
                <p class="typography__caption text">
                  UK
                </p>
              </div>
            </div>
            <div class="column-layout group_4">
              <p class="typography__subtitle-2 content">
                Website
              </p>
              <p class="typography__caption text_1">
                www.aroundthehorn.com
              </p>
            </div>
            <div class="column-layout group_6">
              <p class="typography__subtitle-2 content">
                Account Owner
              </p>
              <p class="typography__caption text">
                Sandy Anderson
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row-layout group_7">
        <div class="column-layout group_8">
          <igc-tabs class="tabs">
            <igc-tab-panel class="row-layout tab-item-content">
              <div class="column-layout group_9">
                <div class="row-layout page-title-1">
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
                <igc-accordion ?single-expand="${false}" class="accordion">
                  <igc-expansion-panel>
                    <p class="typography__body-1 content"></p>
                    <span slot="title">Title goes here...</span>
                  </igc-expansion-panel>
                  <igc-expansion-panel>
                    <p class="typography__body-1 content"></p>
                    <span slot="title">Title goes here...</span>
                  </igc-expansion-panel>
                  <igc-expansion-panel>
                    <p class="typography__body-1 content"></p>
                    <span slot="title">Title goes here...</span>
                  </igc-expansion-panel>
                </igc-accordion>
              </div>
            </igc-tab-panel>
            <igc-tab ?selected="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
            <igc-tab ?disabled="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
            <igc-tab ?disabled="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
          </igc-tabs>
        </div>
        <div class="column-layout group_10">
          <igc-tabs class="tabs">
            <igc-tab-panel class="row-layout tab-item-content">
              <div class="column-layout group_9">
                <div class="row-layout page-title-1">
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button class="button">
                    <span class="material-icons">
                      add
                    </span>
                    <span>Button</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
                <igc-accordion ?single-expand="${false}" class="accordion">
                  <igc-expansion-panel>
                    <p class="typography__body-1 content"></p>
                    <span slot="title">Title goes here...</span>
                  </igc-expansion-panel>
                  <igc-expansion-panel>
                    <p class="typography__body-1 content"></p>
                    <span slot="title">Title goes here...</span>
                  </igc-expansion-panel>
                  <igc-expansion-panel>
                    <p class="typography__body-1 content"></p>
                    <span slot="title">Title goes here...</span>
                  </igc-expansion-panel>
                </igc-accordion>
              </div>
            </igc-tab-panel>
            <igc-tab ?selected="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
            <igc-tab ?disabled="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
          </igc-tabs>
        </div>
      </div>
    `;
  }
}
