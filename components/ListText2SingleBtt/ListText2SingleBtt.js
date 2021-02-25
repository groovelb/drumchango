(async () => {
  const res = await fetch('components/ListText2SingleBtt/ListText2SingleBtt.html');
  const textTemplate = await res.text();

  // Parse and select the template tag here instead 
  // of adding it using innerHTML to avoid repeated parsing
  // and searching whenever a new instance of the component is added.
  const HTMLTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
                           .querySelector('template');

  class ListText2SingleBtt extends HTMLElement {
    constructor() {
      // If you define a constructor, always call super() first as it is required by the CE spec.
      super();
    }

    // Called when element is inserted in DOM
    connectedCallback() {
      const templete = document.importNode(HTMLTemplate.content, true);
      const title = this.getAttribute("title");
      const placeholder1 = this.getAttribute("placeholder");
      const placeholder2 = this.getAttribute("placeholder");


      this.appendChild(templete);

      this.querySelector("#title").innerHTML= title;
      this.querySelector("#value1").setAttribute("placeholder",placeholder1);
      this.querySelector("#value2").setAttribute("placeholder",placeholder2);
      // const shadowRoot = this.attachShadow({ mode: 'open' });

      // // Clone the template and the cloned node to the shadowDOM's root.
      // const instance = HTMLTemplate.content.cloneNode(true);
      // shadowRoot.appendChild(instance);

      // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
      // Current document needs to be defined to get DOM access to imported HTML
    }
  }

  customElements.define('list-text2-single-btt', ListText2SingleBtt);

})();
