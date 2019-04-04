
import React, { Component } from 'react'
import { render } from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}


let data = {
    total: 100,
    powderDays: 20
}


let bookList = [
    { title: "Zain is a good guy", author: "Zain Qazi", pages: "300" },
    { title: "Ammi is awesome", author: "Anas", pages: 400 },
    { title: "Nabeela is cute", author: "Zain", pages: 500 }
]
// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }

// const calcProgress = (total, powder) => {
//     return getPercent(powder/total)
// }
//Functional Component
// const SkiDayCounter2 = ({total, powderDays, progress}) => {
//     return (
//         <section>
//             <div>
//                 <p>Total Days: {total}</p>
//                 <p>Powder days: {powderDays}</p>
//                 <p>Progress: {progress}</p>
//             </div>
//         </section>
//     )
// }


const Book = ({ title, author, pages }) => {
    return (
        <section>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <p>Pages: {pages}</p>
        </section>
    )
}

const Library = ({ books }) => {
    return (
        <div>
            {books.map((book, i) =>
             <Book
                key={i}
                title={book.title}
                author={book.author}
                pages={book.pages} />)}
        </div>
    )
}


render(
    // <Message color="blue" minutes={50} msg="how are yooooou?" />,
    // <SkiDayCounter2 powderDays={data.powderDays} total={data.total} progress={calcProgress(data.total, data.powderDays)}/>,
    <div>
        <Library books={bookList}/>
    </div>,
    document.getElementById('root')
)