const today = new Date();
console.log('today', today);

function dateFomat(today) {
  let dF = today.getFullYear() + '-' + today.getMonth().toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0);
  return dF;
}

console.log('dateFomat(today)', dateFomat(today));
