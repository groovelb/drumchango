(async () => {
  const res = await fetch('components/ModalRegularSignup/ModalRegularSignup.html');
  const textTemplate = await res.text();

  // Parse and select the template tag here instead 
  // of adding it using innerHTML to avoid repeated parsing
  // and searching whenever a new instance of the component is added.
  const HTMLTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
                           .querySelector('template');

  class ModalRegularSignup extends HTMLElement {
    constructor() {
      // If you define a constructor, always call super() first as it is required by the CE spec.
      super();
    }

    // Called when element is inserted in DOM
    connectedCallback() {
      const templete = document.importNode(HTMLTemplate.content, true);
      this.appendChild(templete);
      const step1 = this.querySelector('#step1');
      const step2 = this.querySelector('#step2');

      this.querySelector('#btt_check_email').addEventListener("click",function(){
        step1.classList.add("hide");
        step2.classList.remove("hide");
      });
    }
  }

  customElements.define('modal-regular-signup', ModalRegularSignup);
})();
