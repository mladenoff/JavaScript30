document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.controls input');

  const handleUpdate = function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    const value = this.value;
    const newCSS = value + suffix;
    console.log(newCSS);
    document.documentElement.style.setProperty(`--${this.name}`, newCSS);
  };

  inputs.forEach((input) => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
  });
});
