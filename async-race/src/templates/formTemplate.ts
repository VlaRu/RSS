import { raceContainer } from '../pages/main-page/mainPage';
import { paginationPage } from '../pages/main-page/mainPage';
import { cars } from '../pages/main-page/mainPage-components/pagination';

export default class FormTemplate {
  static createForm(type: string, id: string, labelText: string, className?: string, value?: string): HTMLFormElement {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.className = 'label-input';
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;
    if(value) {
      input.value = value;
    }
    if (className) {
      input.className = className;
    }

    const form = document.createElement('form');
    form.className = 'form';
    form.appendChild(label);
    form.appendChild(input);

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = id === 'created_name-car' ? 'choice-color' : 'choice-color_new';
    colorInput.required = true;
    colorInput.value = '#FFB8F2';

    form.appendChild(colorInput);

    const submitButton = this.createSubmitButton(id === 'created_name-car' ? 'create' : 'save');
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

  static handleFormSubmit(form: HTMLFormElement, onSubmit: (formData: { text: string; color: string }) => void) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputText = (form.querySelector('input[type="text"]') as HTMLInputElement).value;
      const inputColor = (form.querySelector('input[type="color"]') as HTMLInputElement).value;

      onSubmit({ text: inputText, color: inputColor });
      paginationPage.container.innerHTML = '';
      paginationPage.createPaginationContainer();
      const countCarRefreshRender = document.querySelector('.count-car_garage') as HTMLElement;
      countCarRefreshRender.textContent = `Garage: ${cars.count}`;
      raceContainer.container.innerHTML = '';
      raceContainer.render();
      form.reset();
    });
  }
}
