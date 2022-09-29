import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Recipedetail = () => {
  const [data, setData] = useState([
    {
        "RCP_PARTS_DTLS": "새우두부계란찜\n연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술)\n고명\n시금치 10g(3줄기)",
        "RCP_WAY2": "찌기",
        "MANUAL_IMG20": "",
        "MANUAL20": "",
        "RCP_SEQ": "28",
        "INFO_NA": "99",
        "INFO_WGT": "",
        "INFO_PRO": "14",
        "MANUAL_IMG13": "",
        "MANUAL_IMG14": "",
        "MANUAL_IMG15": "",
        "MANUAL_IMG16": "",
        "MANUAL_IMG10": "",
        "MANUAL_IMG11": "",
        "MANUAL_IMG12": "",
        "MANUAL_IMG17": "",
        "MANUAL_IMG18": "",
        "MANUAL_IMG19": "",
        "INFO_FAT": "17",
        "HASH_TAG": "연두부",
        "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png",
        "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_3.png",
        "RCP_PAT2": "반찬",
        "MANUAL_IMG04": "",
        "MANUAL_IMG05": "",
        "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_1.png",
        "MANUAL01": "1. 손질된 새우를 끓는 물에 데쳐 건진다.a",
        "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png",
        "MANUAL_IMG06": "",
        "MANUAL_IMG07": "",
        "MANUAL_IMG08": "",
        "MANUAL_IMG09": "",
        "MANUAL08": "",
        "MANUAL09": "",
        "MANUAL06": "",
        "MANUAL07": "",
        "MANUAL04": "",
        "MANUAL05": "",
        "MANUAL02": "2. 연두부, 달걀, 생크림, 설탕에 녹인 무염버터를 믹서에 넣고 간 뒤 새우(1)를 함께 섞어 그릇에 담는다.b",
        "MANUAL03": "3. 시금치를 잘게 다져 혼합물 그릇(2)에 뿌리고 찜기에 넣고 중간 불에서 10분 정도 찐다.c",
        "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png",
        "MANUAL11": "",
        "MANUAL12": "",
        "MANUAL10": "",
        "INFO_CAR": "3",
        "MANUAL19": "",
        "INFO_ENG": "220",
        "MANUAL17": "",
        "MANUAL18": "",
        "RCP_NM": "새우 두부 계란찜",
        "MANUAL15": "",
        "MANUAL16": "",
        "MANUAL13": "",
        "MANUAL14": ""
    },
    {
        "RCP_PARTS_DTLS": "돼지고기(50g), 배춧잎(5장), 부추(30g), 쌀(100g), 당근(20g),\n표고버섯(2개), 양파(50g), 애호박(1/2개), 우렁이(100g),\n된장(30g)",
        "RCP_WAY2": "찌기",
        "MANUAL_IMG20": "",
        "MANUAL20": "",
        "RCP_SEQ": "636",
        "INFO_NA": "976",
        "INFO_WGT": "",
        "INFO_PRO": "22.3",
        "MANUAL_IMG13": "",
        "MANUAL_IMG14": "",
        "MANUAL_IMG15": "",
        "MANUAL_IMG16": "",
        "MANUAL_IMG10": "",
        "MANUAL_IMG11": "",
        "MANUAL_IMG12": "",
        "MANUAL_IMG17": "",
        "MANUAL_IMG18": "",
        "MANUAL_IMG19": "",
        "INFO_FAT": "7.2",
        "HASH_TAG": "",
        "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00636_2.png",
        "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00636_3.png",
        "RCP_PAT2": "일품",
        "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00636_4.png",
        "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00636_5.png",
        "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00636_1.png",
        "MANUAL01": "1. 끓는 물에 배춧잎을 데친다.",
        "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00636_1.png",
        "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00636_6.png",
        "MANUAL_IMG07": "",
        "MANUAL_IMG08": "",
        "MANUAL_IMG09": "",
        "MANUAL08": "",
        "MANUAL09": "",
        "MANUAL06": "6. 찜통에 김이 오르면 ?번을 넣고 약 5분\n정도 찐다.",
        "MANUAL07": "",
        "MANUAL04": "4. 데친 배춧잎에 지어놓은 밥을 올려\n돌돌만다.",
        "MANUAL05": "5. 말아 놓은 배춧잎을 부추로 묶는다.",
        "MANUAL02": "2. 당근, 호박, 표고버섯, 양파는\n입자있게 다진다.",
        "MANUAL03": "3. 돼지고기를 썰어 불린 쌀, 다진 야채와\n함께 밥을 짓는다.",
        "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00636_2.png",
        "MANUAL11": "",
        "MANUAL12": "",
        "MANUAL10": "",
        "INFO_CAR": "43",
        "MANUAL19": "",
        "INFO_ENG": "326.3",
        "MANUAL17": "",
        "MANUAL18": "",
        "RCP_NM": "우렁된장소스 배추롤",
        "MANUAL15": "",
        "MANUAL16": "",
        "MANUAL13": "",
        "MANUAL14": ""
    },
    {
        "RCP_PARTS_DTLS": "소고기(100g), 돼지고기(100g), 대추(3알), 양파(30g),\n마늘(20g), 배(1/4개), 애호박(1/2개), 단호박(1/4개),\n파프리카(50g), 인삼(1뿌리), 양송이(5개), 배추잎(5장),\n저염간장(20g), 설탕(20g), 소금(0.2g), 후춧가루(0.01g)\n두부(50g)",
        "RCP_WAY2": "굽기",
        "MANUAL_IMG20": "",
        "MANUAL20": "",
        "RCP_SEQ": "637",
        "INFO_NA": "196",
        "INFO_WGT": "",
        "INFO_PRO": "26.9",
        "MANUAL_IMG13": "",
        "MANUAL_IMG14": "",
        "MANUAL_IMG15": "",
        "MANUAL_IMG16": "",
        "MANUAL_IMG10": "",
        "MANUAL_IMG11": "",
        "MANUAL_IMG12": "",
        "MANUAL_IMG17": "",
        "MANUAL_IMG18": "",
        "MANUAL_IMG19": "",
        "INFO_FAT": "9.5",
        "HASH_TAG": "",
        "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00637_2.png",
        "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00637_3.png",
        "RCP_PAT2": "반찬",
        "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00637_4.png",
        "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00637_5.png",
        "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00637_1.png",
        "MANUAL01": "1. 대추는 돌려 깍아 씨를 제거 하고 곱게\n다진다.",
        "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00637_1.png",
        "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00637_6.png",
        "MANUAL_IMG07": "",
        "MANUAL_IMG08": "",
        "MANUAL_IMG09": "",
        "MANUAL08": "",
        "MANUAL09": "",
        "MANUAL06": "6. 떡갈비를 팬에 굽고, 접시에 배춧잎을\n깔고 익힌 양송이를 올리고 떡갈비를\n담는다.",
        "MANUAL07": "",
        "MANUAL04": "4. 양송이는 편으로 썰어 팬에 익히고,\n인삼을 뇌두를 자르고 깨끗이 씻어\n팬에 볶아 잘게 썰어 ?에 넣는다.",
        "MANUAL05": "5. 재료가 골고루 섞인 떡갈비를 갈비\n모양으로 만든다.",
        "MANUAL02": "2. 다진 소고기와 돼지고기에 대추와 소금\n후춧가루를 넣고 치댄다.",
        "MANUAL03": "3. 애호박과 단호박, 파프리카는\n입자있게 썰어 ?에 넣고 잘 치댄다.",
        "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00637_2.png",
        "MANUAL11": "",
        "MANUAL12": "",
        "MANUAL10": "",
        "INFO_CAR": "15",
        "MANUAL19": "",
        "INFO_ENG": "253.3",
        "MANUAL17": "",
        "MANUAL18": "",
        "RCP_NM": "인삼떡갈비",
        "MANUAL15": "",
        "MANUAL16": "",
        "MANUAL13": "",
        "MANUAL14": ""
    }
]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3002/COOKRCP01",
    }).then(function (response) {
      setData(response.data.row);
    });
  },[]);

  // const imglist = () => {
  //   for (let i = 1; i < 10; i++) {
  //     if (data[0]["MANUAL_IMG0" + i] !== "") {
  //       console.log(data[0]["MANUAL_IMG0" + i]);
  //       return data[0]["MANUAL_IMG0" + i];
  //     }
  //   }
  // };

  // let imglist = [];
  // let textlist = [];
  // for (let i = 1; i <= 10; i++) {
  //   if (data[0]["MANUAL_IMG0" + i] === "") {
  //     break;
  //   }
  //   imglist.push(data[0]["MANUAL_IMG0" + i]);
  // }
  // for (let i = 1; i <= 10; i++) {
  //   if (data[0]["MANUAL0" + i] === "") {
  //     break;
  //   }
  //   textlist.push(data[0]["MANUAL0" + i]);
  // }
  // console.log(imglist);
  // console.log(textlist);

  let list = [];
  for (let i = 1; i < 10; i++) {
    if (data[2]["MANUAL_IMG0" + i] === "" && data[2]["MANUAL0" + i] === "") {
      break;
    }
    if (data[2]["MANUAL_IMG0" + i] !== "") {
      list.push(data[2]["MANUAL_IMG0" + i]);
    }
    if (data[2]["MANUAL0" + i] !== "") {
      list.push(data[2]["MANUAL0" + i]);
    }
  }
  console.log(list);

  return (
    <div>
      {data !== null ? (
        <Div>
          {/* <div className="name">{data[0].RCP_NM}</div>
          <img className="mainimg" src={data[0].ATT_FILE_NO_MK}></img>
          <p className="head">재료</p>
          <p className="ingred">{data[0].RCP_PARTS_DTLS}</p>
          <p className="head">만들기</p> */}
          {/* <img className="orderimg" src={imglist()}></img> */}

          {/* <img className="orderimg" src={data[0].MANUAL_IMG01}></img>
                <p className="ordertext">{data[0].MANUAL01}</p>
                <img className="orderimg" src={data[0].MANUAL_IMG02}></img>
                <p className="ordertext">{data[0].MANUAL02}</p>
                <img className="orderimg" src={data[0].MANUAL_IMG03}></img>
                <p className="ordertext">{data[0].MANUAL03}</p> */}

          <div className="name">{data[2].RCP_NM}</div>
          <img className="mainimg" src={data[2].ATT_FILE_NO_MK}></img>
          <p className="head">재료</p>
          <p className="ingred">{data[2].RCP_PARTS_DTLS}</p>
          <p className="head">만들기</p>
          {list.map((el) =>
            el.slice(-3) === "png" ? <img key={list.indexOf(el)} className="orderimg" src={el}></img> : <p key={list.indexOf(el)} className="ordertext">{el}</p>
          )}
        </Div>
      ) : (
        ""
      )}
    </div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .name {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 4rem 0rem 4rem 0rem;
  }
  .mainimg {
    width: 30rem;
    max-height: 30rem;
  }
  .head {
    font-size: 2rem;
    font-weight: 600;
    margin: 4rem 0rem 4rem 0rem;
  }
  .ingred {
    font-size: 1.3rem;
    max-width: 30rem;
    letter-spacing: 0.05rem;
  }
  .orderimg {
    width: 16rem;
  }
  .ordertext {
    margin: 2rem 0rem 2rem 0rem;
    max-width: 16rem;
  }
`;

export default Recipedetail;