import axios from "axios";
import client from "./client";
//"proxy": "http://localhost:4000/"
//"proxy": "http://openapi.data.go.kr"
const API_Key = process.env.REACT_APP_API_KEY;

export const openAPI = async() =>
    await client.get(`http://apis.data.go.kr/B552895/LocalGovPriceInfoService?serviceKey=${API_Key}&pageNo="1"&numOfRows="10"&examin_de="20210511"&prdlst_nm="감귤"`);
// export const openAPI = async() =>
//     await client.get(`http://apis.data.go.kr/B552895/LocalGovPriceInfoService/getItemPriceResearchSearch?serviceKey=aBUlLgKy%2Fypdcu92sBjkyKH5Xg%2F%2BI66FYvJafYJrcxE0tlrJSfu9Z0uc0t0gVoPvrvbkJKBiNVHsMPzL7qPpaQ%3D%3D&numOfRows=3&pageNo=1&_returnType=xml,json&examin_de=20160504&prdlst_cd=614&prdlst_nm=%EA%B0%90%EA%B7%A4`);

export const testAPI = async() => 
    await axios.get('http://apis.data.go.kr/B552895/LocalGovPriceInfoService', {
        params: {
            serviceKey: API_Key,
            pageNo: 1,
            numOfRows: 10,
            examin_de: 20201128,
            prdlst_nm: "감귤",
        }
    });