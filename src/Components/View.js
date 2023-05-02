import React from 'react';
import styles from "../styles/Table.module.css";
import { Icon } from 'react-icons-kit'
import { bin } from 'react-icons-kit/icomoon/bin';

const View = ({ books, deleteHandler }) => {


    


    return (

        books.map((book, index) => <tr key={index}>
            <td>{book.number}</td>
            <td>{book.titel}</td>
            <td className={styles.td3}>{book.ather}</td>
            <td className={styles.icons} onClick={()=>deleteHandler(book.number)} > <Icon icon={bin} /> </td>

        </tr>)


    );
};

export default View;