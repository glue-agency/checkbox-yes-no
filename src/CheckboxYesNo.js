const CheckboxYesNo = class {
  constructor (checkbox, target) {
    this.checkbox = document.querySelector(checkbox);
    this.target = document.querySelector(target);

    this.updateTarget();
    this.bindEventListeners();
  }

  bindEventListeners () {
    this.checkbox.addEventListener('change', this.onCheckboxChange.bind(this));
  }

  updateTarget () {
    this.target.value = this.checkbox.checked ? 'yes' : 'no';
  }

  onCheckboxChange () {
    this.updateTarget();
  }
};

export default CheckboxYesNo;
