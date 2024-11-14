const getCurrentDate = () => {
  const requiredDate = new Date(Date.now()).toLocaleDateString("en-In");

  const day = requiredDate.split("/")[0];
  const month = requiredDate.split("/")[1] - 1;
  const year = requiredDate.split("/")[2];
  return `${year}-${month}-${day}`;
};

const currentDate = getCurrentDate();

console.log(currentDate);

export const fetchNews = async (topic) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=${currentDate}&sortBy=publishedAt&apiKey=e3854ade8c784719b964a84bc0a54a81`
    );
    const data = await res.json();
    console.log(data);
    return data.articles;
  } catch (error) {
    return [{ title: "No News Found" }];
  }
};
