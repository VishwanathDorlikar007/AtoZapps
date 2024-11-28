const fetchNews = async (key: string) => {
  const response = await fetch(
    "https://newsapi.org/v2/everything?" +
      `q=${key}&` +
      "sortBy=popularity&" +
      "apiKey=d806800d41544b5d834e9e3b6bdae18e"
    // "apiKey=7724e979730840768bbb83000d63dbd1"
  );

  const json = await response.json();
  return json;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  var keywithoutspace = key?.replace(/\s/g, "+");

  const response = await fetchNews(keywithoutspace ? keywithoutspace : "");
  return Response.json({ response });
}
