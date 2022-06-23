import {ChangeEvent, useState} from "react";
// import {Link, useSearchParams} from 'react-router-dom'
//
// export const CardsDemo = () => {
//     const [cards, setCards] = useState([])
//     const [searchParams, setSearchParams] = useSearchParams()
//     const cardQuery = searchParams.get('card') || ''
//     const latest = searchParams.has('latest')
//     const startsFrom = latest ? 80 : 1
//     const handlerSubmit = (e: ChangeEvent) => {
//         e.preventDefault();
//         const form = e.target;
//         const query = form.search.value;
//         const isLatest = form.latest.checked
//         const params = {}
//         if (query.length) params.card = query
//         if (isLatest) params.latest = true
//         setSearchParams({params})
//     }
//     return (
//         <div>
//             <h1>cards</h1>
//             <form autoComplete="off" onSubmit={handlerSubmit}></form>
//             <input type="search" name={'search'}/>
//             <label style={{padding: '0 1rem'}}>
//                 <input type="checkbox" name={'latest'}/>New only
//             </label>
//             <input type="submit" value={'search'}/>
//             {cards.filter(
//                 card => card.title.includes(cardQuery) && card.id>=startsFrom
//             ).map(card => (
//                 <Link key={card.id} to={'/cards/${card.id}'}>
//                     <li>{card.title}</li>
//                 </Link>
//             ))}
//         </div>
//     )
// }