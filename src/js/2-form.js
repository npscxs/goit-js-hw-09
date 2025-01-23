let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const saveToLocalStorage = () => {
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.error('Error saving to local storage:', error);
  }
};

const populateForm = () => {
  try {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      formData.email = email;
      formData.message = message;
      form.email.value = email || '';
      form.message.value = message || '';
    }
  } catch (error) {
    console.error('Error populating form:', error);
  }
};
const handleInputChange = event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage();
};

const handleSubmit = event => {
  event.preventDefault();
  try {
    if (formData.email === '' || formData.message === '') {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  } catch (error) {
    console.error('Error during form submission:', error);
  }
};

form.addEventListener('input', handleInputChange);
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', populateForm);
