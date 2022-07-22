export default function validateForm(form) {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!form.name.trim()) {
    errors.name = "your pokemon needs a name";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "name only accepts letters";
  } else if (form.name.length < 2 || form.name.length > 20) {
    errors.name = "name must be 2 - 20 characters";
  }
  if (form.hp < 1 || form.hp > 255) {
    errors.hp = "hit points must be 1 - 255";
  }
  if (form.defense < 1 || form.defense > 255) {
    errors.defense = "defense must be 1 - 255 points";
  }
  if (form.height < 1 || form.height > 255) {
    errors.height = "height must be 1 - 255";
  }
  if (form.attack < 1 || form.attack > 255) {
    errors.attack = "attack must be 1 - 255 points";
  }
  if (form.speed < 1 || form.speed > 255) {
    errors.speed = "speed must be 1 - 255 points";
  }
  if (form.weight < 1 || form.weight > 255) {
    errors.weight = "weight must be 1 - 255";
  }
  /* if (form.types.length === 0) {
    errors.types = "your pokemon needs to belong to one type at least";
  }
  if (form.types.length > 2) {
    errors.types = "your pokemon cannot belong up to 2 types";
  }
   */ return errors;
}
