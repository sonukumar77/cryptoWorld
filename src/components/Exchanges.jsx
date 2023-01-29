import React from "react";
// import {useGetExchangesQuery} from "../services/cryptoApi"
import { Collapse, Typography } from "antd";

const { Title } = Typography;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Exchanges = () => {
  // const {data,isFetching} = useGetExchangesQuery();
  // console.log(data,isFetching);

  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': '39142539b3mshbbd03d958798fa5p1ea9d1jsn28c827e0aa97',
  //         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  //     }
  // };

  // fetch('https://coinranking1.p.rapidapi.com/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      Exchanges
      <Title level={2}>
        This API is not giving access for FREE So i unable to do with this page
        and getting error as:
      </Title>
      <Title level={4} style={{ color: "red" }}>
        This endpoint is disabled for your subscription.
      </Title>
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel header="This is panel header with arrow icon" key="1">
          <p>{text}</p>
        </Panel>
        <Panel
          showArrow={false}
          header="This is panel header with no arrow icon"
          key="2"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Exchanges;
