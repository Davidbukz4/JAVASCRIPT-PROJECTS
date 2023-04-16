const birthday = document.getElementById("birthday");
const resultBtn = document.getElementById("result-btn");
const outputEl = document.getElementById("output");

const calculateAge = () => {
  const birthDate = birthday.value;
  if (!birthDate) {
    window.alert("Please enter your birthday");
  } else {
    const age = getAge(birthDate);
    const ch = "s";
    outputEl.textContent = `You are ${age} year${age > 1 ? ch : ""} old.`;
  }
};

const getAge = (birthDate) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthDate);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  // checks if birthday has occured
  if (
    (month === 0 && currentDate.getDate() < birthdayDate.getDate()) ||
    month < 0
  ) {
    age -= 1;
  }
  return age;
};
