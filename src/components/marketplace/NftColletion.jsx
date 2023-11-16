import React, { useState, useEffect } from "react";
import axios from "axios";
import NFT from "./Nft";

const NFTCollection = () => {
  // 여러개의 NFT를 불러오기 위해 useState를 사용합니다.
  // 여러 NFT 데이터를 담을 수 있는 배열을 만들고, setNfts를 통해 데이터를 업데이트
  const [nfts, setNfts] = useState([]);

  // useEffect를 사용하여 컴포넌트가 마운트되면 nft 데이터를 불러옵니다.
  useEffect(() => {
    async function fetchNFTs() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=9"
        );

        const nftData = response.data.map((nft) => ({
          image: nft.url,
          name: nft.title,
          download: nft.thumbnailUrl,
          author: "Demo Author",
          bidders: ["bidder1.jpg", "bidder2.jpg", "bidder3.jpg"],
          currentbid: "$5000",
        }));

        setNfts(nftData); //불러온 데이터를 setNfts를 통해 업데이트함
      } catch (error) {
        console.error("데이터를 불러올 수 없습니다.", error); //에러 발생 시 콘솔에 표시
      }
    } // async 를 사용하여 비동기 함수를 만듬
    fetchNFTs(); //async 를 사용하여 비동기 함수 실행
  }, []); // 빈 배열을 넣어 마운트 될 때 한번 만 실행되도록 함

  return (
    <div>
      {nfts.map((row, index) => (
        <NFT key={index} {...row} />
      ))}

      {/* <h1>NFTCollection</h1> */}
    </div>
  );
};

export default NFTCollection;
