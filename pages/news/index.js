export default function News({articles}) {
  return (
    <div>
      <h1>News Articles</h1>
      <ul>
          {
              articles.map(article => (
                  <li key={article.id}>
                      <h2>{article.title}</h2>
                      <p>{article.description}</p>
                  </li>
              ))
          }
      </ul>
    </div>
  );
}

export async function getServerSideProps(){
    const response = await fetch("http://localhost:3004/news");
    const articles = await response.json();
    return{
        props:{
            articles
        }
    }
}