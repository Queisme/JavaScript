const input = document.getElementById('input');

const check = () => {
  const value = input.value;
  const revValue = [...value].reverse().join('');
  value === revValue
    ? alert(`${value} is a Palindrome!`)
    : alert(`${value} is not a Palindrome.`);

  input.value = '';
};
