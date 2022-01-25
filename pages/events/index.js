import { useState } from "react";
import { useRouter } from 'next/router'
const URL = "http://localhost:3004/events";
export default function EventListener({ eventsList }) {
  const [events, setEvents] = useState(eventsList);
  const router = useRouter();
  
  const filterByCategory = async (category) => {
    // const {route} = router;
    // console.log(router);
        router.push(`events?category=${category}`, undefined, { shallow: true })
    const eventsListA = await fetch(`${URL}?category=${category}`).then(response=>response.json());
    console.log(eventsListA);
    setEvents(eventsListA);
  };

  return (
    <>
      <h1>Event list</h1>
      <input
        type="radio"
        id="sports"
        name="fav_language"
        value="sports"
        onClick={(e) => {
          filterByCategory(e.target.value);
        }}
      />
      <label htmlFor="sports">sports</label>
      <input
        type="radio"
        id="technology"
        name="fav_language"
        value="technology"
        onClick={(e) => {
          filterByCategory(e.target.value);
        }}
      />
      <label htmlFor="technology">technology</label>
      <input
        type="radio"
        id="food"
        name="fav_language"
        value="food"
        onClick={(e) => {
          filterByCategory(e.target.value);
        }}
      />
      <label htmlFor="food">food</label>
      <input
        type="radio"
        id="art"
        name="fav_language"
        value="art"
        onClick={(e) => {
          filterByCategory(e.target.value);
        }}
      />
      <label htmlFor="art">art</label>
      <ul>
        {events.map((event) => {
            var date = new Date(event.date*1000).toLocaleDateString("en-US");
          return <li key={event.id}>
            <h2>
              {event.title} |{event.category}
            </h2>
            <p>{event.description}</p>
            <p>{date}</p>
          </li>
        }
        )}
      </ul>
    </>
  );
}

export async function getServerSideProps(context) {
    const {category} = context.query;
    const queryString = category ? `?category=${category}` : '';
  const response = await fetch(URL+queryString);
  const eventsList = await response.json();
  return {
    props: {
      eventsList,
    },
  };
}

//fetch data and prerender page with SSR for SEO
//for sorting/ fetch data client side
