const sendBtn = () => {
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const name = nameField.value;
  const email = emailField.value;
  const message = messageField.value
  nameField.value = '';
  emailField.value = '';
  messageField.value = '';
  saveInfoToLocalStorage(name,email)
  
} 

const getStoredInfo = () => {
  let info = {};
  const storedInfo = localStorage.getItem('info');
  if (storedInfo) {
    cart = JSON.parse(storedInfo)
  }
  return info;
}

const saveInfoToLocalStorage = (name,email) => {
  const info = getStoredInfo();
  info[name] = email;
  const infoStringified = JSON.stringify(info);
  localStorage.setItem('info', infoStringified);
};

const displayInfoFromLocalInfo = () => {
  const savedInfo = getStoredInfo();
  // console.log(savedInfo);

}


displayInfoFromLocalInfo()

const reset = () => {
  localStorage.clear()
}
reset()