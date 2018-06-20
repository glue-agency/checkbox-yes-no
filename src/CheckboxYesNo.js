const CheckboxYesNo = class {
  constructor (checkbox, target) {
    this.checkbox = checkbox;
    this.target = target;

    this.updateTarget();
    this.bindEventListeners();
  }

  bindEventListeners () {
    this.checkbox.addEventListener('change', this.updateTarget.bind(this));
  }

  updateTarget () {
    this.target.value = this.checkbox.checked ? 'yes' : 'no';
  }

  static init () {
    CheckboxYesNo.instances = CheckboxYesNo.instances || [];

    let checkboxes = document.querySelectorAll('[data-checkbox-yes-no]');

    checkboxes.forEach(checkbox => {
      let instance = CheckboxYesNo.newFromDataAttributes(checkbox);

      CheckboxYesNo.instances.push(instance);
    });
  }

  static newFromDataAttributes (checkbox) {
    let targetSelector = checkbox.getAttribute('data-checkbox-yes-no');
    let target = document.querySelector(targetSelector);

    return new CheckboxYesNo(checkbox, target);
  }
};

export default CheckboxYesNo;
