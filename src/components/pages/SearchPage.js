import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CottonCollecton from '../CottonCollecton';



const Loader = styled.div`
  min-width: calc(100vw - 30vw);
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
    text-align: center;
  }
`;

const Box = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  padding: 30px 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SearchPage = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    const getData = async (val) => {
        let result = await fetch(`http://3.110.3.217/products/search/${val}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
        result = await result.json()
        console.log(result)
        setItems(result);
        console.log("data is seted ");
        setLoader(false);
    };


    const parms = useParams();

    const { item } = parms;

    useEffect(() => {
        setLoader(true);

        getData(item);
    }, [item]);


  return(
<>
{
    items.length >= 0 &&
    items.map((item,key) =>
    <CottonCollecton key={key} item={item} />
    )
}

</>

  )
}
export default SearchPage