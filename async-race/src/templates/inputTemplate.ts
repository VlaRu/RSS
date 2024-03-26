export default class InputTemplate {
  static createInput(type: string, id: string, labelText: string, className?: string): HTMLFormElement {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.className = 'label-input';
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;
    if (className) {
      input.className = className;
    }

    const form = document.createElement('form');
    form.className = 'form';
    form.appendChild(label);
    form.appendChild(input);

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = (id === 'created_name-car') ? 'choice-color' : 'choice-color_new';
    colorInput.required = true;

    form.appendChild(colorInput);

    const submitButton = this.createSubmitButton((id === 'created_name-car') ? 'create' : 'save');
    form.appendChild(submitButton);

    return form;
  }

  static createSubmitButton(value: string, className?: string): HTMLInputElement {
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = value;
    if (className) {
      submitButton.className = className;
    }
    return submitButton;
  }
}