console.log("fetching a document");

const showDoc = async () => {
  const response = await fetch("text/top10manga.txt");
  return await response.text();
};

showDoc()
  .then((top10) => {
    document.getElementById("top10").innerText = top10;
    console.log("yay!");
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
