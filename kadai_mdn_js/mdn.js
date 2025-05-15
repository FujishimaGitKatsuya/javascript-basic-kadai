const datenow = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // JavaScriptの月は0から始まるため、+1する必要があります
  const day = today.getDate();
  
  console.log(`${year}年${month}月${day}日`);
}

datenow();