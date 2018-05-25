var CheckboxYesNo = function (checkbox, target) {
  this.checkbox = document.querySelector(checkbox);
  this.target = document.querySelector(target);

  this.updateTarget();
  this.bindEventListeners();
};

CheckboxYesNo.prototype = {
  bindEventListeners: function () {
    this.checkbox.addEventListener('change', this.onCheckboxChange.bind(this));
  },
  updateTarget: function () {
    this.target.value = this.checkbox.checked ? 'yes' : 'no';
  },
  onCheckboxChange: function () {
    this.updateTarget();
  }
};

export default CheckboxYesNo;
