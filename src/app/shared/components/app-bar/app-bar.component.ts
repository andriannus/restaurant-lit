import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import { appBarStyles } from "./app-bar.style";

import "@/app/shared/components/bottom-sheet";

@customElement("x-app-bar")
export default class AppBarComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isActive: boolean;

  @property({ type: Boolean, reflect: true })
  private isBottomSheetShown: boolean;

  constructor() {
    super();
    this.isActive = false;
    this.isBottomSheetShown = false;
    this.onPageScroll = this.onPageScroll.bind(this);
  }

  static get styles(): CSSResultGroup {
    return appBarStyles;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("scroll", this.onPageScroll);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("scroll", this.onPageScroll);
  }

  private hasScrolled(): boolean {
    const { body, documentElement } = document;
    const isValidBody = body.scrollTop > 0;
    const isValidDocumentElement = documentElement.scrollTop > 0;

    return isValidBody || isValidDocumentElement;
  }

  private onPageScroll(): void {
    if (this.isActive === this.hasScrolled()) return;
    this.isActive = this.hasScrolled();
  }

  private toggleBottomSheet(): void {
    this.isBottomSheetShown = !this.isBottomSheetShown;
  }

  render(): TemplateResult {
    return html`
      <header class=${classMap({ AppBar: true, "is-active": this.isActive })}>
        <button class="AppBar-button" @click=${this.toggleBottomSheet}>
          <span class="AppBar-icon">&#9776;</span>
        </button>

        <p class="AppBar-title">We The Food</p>

        <div class="AppBar-spacer"></div>

        <nav>
          <ul class="AppBar-actions">
            <li class="AppBar-action">
              <a href="/">Home</a>
            </li>

            <li class="AppBar-action">
              <a href="/favorite">Favorite</a>
            </li>

            <li class="AppBar-action">
              <a
                href="https://andriannus.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <x-bottom-sheet
        ?value=${this.isBottomSheetShown}
        @update=${this.toggleBottomSheet}
      >
        <ul class="BottomDrawer">
          <li class="BottomDrawer-action">
            <a href="/">Home</a>
          </li>

          <li class="BottomDrawer-action">
            <a href="/">Favorite</a>
          </li>

          <li class="BottomDrawer-action">
            <a
              href="https://andriannus.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </li>
        </ul>
      </x-bottom-sheet>
    `;
  }
}
