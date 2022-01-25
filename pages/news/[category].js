export default function ArticleByCategory({articles, category}){
    return(
        <>
            {articles.map( article=>(
            <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <h4>{article.category}</h4>
            </div>
            ))}
        </>
    )
}

export async function getServerSideProps(context){
    const {query, req, res} = context;
    console.log(req.headers.cookie);
    res.setHeader("Set-Cookie", ["name:Siddhesh"])
    const {category} = context.params;
    const response = await fetch(`http://localhost:3004/news?category=${category}`);
    const articles = await response.json();
    
    return{
        props:{
            articles,
            category
        }
    }
}