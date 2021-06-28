import { CSSResultGroup, html, LitElement, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { bottomSheetStyles } from "./bottom-sheet.style";

@customElement("x-bottom-sheet")
export default class AppBarComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private value: boolean;

  private html: HTMLHtmlElement;

  constructor() {
    super();
    this.html = document.querySelector("html") as HTMLHtmlElement;
    this.value = false;
  }

  updated(): void {
    if (this.value) {
      this.clipHtml();
      return;
    }

    this.unclipHtml();
  }

  static get styles(): CSSResultGroup {
    return bottomSheetStyles;
  }

  private closeBottomSheet(): void {
    this.dispatchEvent(new CustomEvent("update"));
  }

  private stopParentEvent(e: Event): void {
    e.stopPropagation();
  }

  private isHtmlClipped(): boolean {
    if (!this.html) return false;
    return this.html.classList.contains("is-clipped");
  }

  private clipHtml(): void {
    if (!this.isHtmlClipped()) {
      this.html?.classList.add("is-clipped");
    }
  }

  private unclipHtml(): void {
    if (this.isHtmlClipped()) {
      this.html?.classList.remove("is-clipped");
    }
  }

  render(): typeof nothing | TemplateResult {
    if (!this.value) return nothing;

    return html`
      <div class="BottomSheet" @click=${this.closeBottomSheet}>
        <div :id="id" class="BottomSheet-dialog" @click=${this.stopParentEvent}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
