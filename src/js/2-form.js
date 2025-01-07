let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const fellFormFields = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }
    const formDataLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    formData = formDataLS;
    for (const key in formDataLS) {
      form.elements[key].value = formDataLS[key];
    }
  } catch (error) {
    console.log('error', error);
  }
};
fellFormFields();

const inputOnFormField = event => {
  const { target: fieldForm } = event;
  const { value: fieldInputData } = fieldForm;
  const { name: fieldInputName } = fieldForm;
  formData[fieldInputName] = fieldInputData;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', inputOnFormField);
