import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

const List = ({ url, requestOptions, responseField }) => {
    const [listData, setListData] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setListData(responseField ? data[responseField] : data))
            .catch(err => console.error(err));
    }, [url, requestOptions, responseField]);

    return (
        <>
            {listData.map((listItemData) => <ListItem itemData={listItemData} key={listItemData.id} />)}
        </>
    );
}

export default List