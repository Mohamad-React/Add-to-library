import React, { useEffect } from 'react';


import styles from "../styles/Table.module.css";
import { useState } from 'react';
import View from './View';



const Table = () => {

    const [titel, setTitel] = useState("");
    const [ather, setAther] = useState("");
    const [number, setNumber] = useState("");
    const [books, setBooks] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();
        const book = { titel, ather, number };
        setBooks([...books, book]);
    };

    useEffect(() => {
        const data = localStorage.getItem("books");
        if (data) {
            setBooks(JSON.parse(data));
        } else {
            setBooks([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books])
    

    const deleteHandler = (number) => {
        const filterbooks = books.filter((element,index)=>{
            return element.number !== number ;
        })
        setBooks(filterbooks) 
      };

    console.log(books);
    return (
        <div className={styles.container}>

            <div className={styles.inputcontainer}>
                <div className={styles.main}>
                    <form onSubmit={submitHandler}>
                        <label >Titel
                        </label>
                        <input
                            type='text'
                            required
                            onChange={(e) => { setTitel(e.target.value) }}
                        />

                        <label>Schriftsteller</label>
                        <input
                            type='text'
                            required
                            onChange={(e) => { setAther(e.target.value) }}
                        />

                        <label>Nummer#</label>
                        <input
                            required
                            type='text'
                            onChange={(e) => { setNumber(e.target.value) }}
                        />
                        <div className={styles.butt}>
                            <button type='submit' >hinzufügen</button>
                        </div>
                    </form>

                </div>


            </div>

            <div className={styles.tablecontainer}>
                {books.length > 0 && <div className={styles.div}>
                    <table >
                        <thead className={styles.theadcontainer}>
                            <tr>
                                <th>Nummer#</th>
                                <th>Titel</th>
                                <th>Schriftsteller</th>
                                <th>Lösen</th>
                            </tr>

                        </thead>
                        <tbody className={styles.tbodycontainer}>
                          <View books={books} deleteHandler={deleteHandler}/>
                        </tbody>



                    </table>
                    <div className={styles.buttdelet}>
                        <button type='submit' onClick={()=>setBooks([])}>alle Lösen</button>
                    </div>

                </div>}
                {books.length < 1 && <p className={styles.keinebuch}>es gibt keine Buch</p>}
            </div>
        </div>
    );
};

export default Table;