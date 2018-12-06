const inputs = document.querySelectorAll('.controls input') //selects aall the inputs on the page

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //bacause the colour does not have sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(this.name)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
