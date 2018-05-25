var CheckboxYesNo = function (checkbox, target) {
  this.checkbox = document.querySelector(checkbox);
  this.target = document.querySelector(target);

  this.updateTarget();
};

CheckboxYesNo.prototype = {
  updateTarget: function () {
    this.target.value = this.checkbox.checked ? 'yes' : 'no';
  }
};

export default CheckboxYesNo;
