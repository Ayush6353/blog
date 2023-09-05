// import axios from "axios";
// import HtmlTableToJson from "html-table-to-json";
// import { blogUrl } from "../../utils/blog";
// // import { collection } from "firebase/firestore";



// export const fetchAllBlog = async () => {
//     return await axios.get(`${blogUrl}/blogs`).then((res) => {
//         console.log(res,"///////////////////////////////////")
//         const jsonTables = HtmlTableToJson.parse(res.data);        
//         return jsonTables?.results[0].reverse()
//     }).catch((e) => {
//         console.log("e is", e);
//         return e
//     })
// }

// export const fetchBlogBySlug = async (slug) => {
//     return await axios.get(`${blogUrl}/blogs/octopus/${slug}`).then((res) => {
//         const jsonTables = HtmlTableToJson.parse(res.data);
//         return jsonTables?.results[0]
//     }).catch((e) => {
//         console.log("e is", e);
//         return e
//     })
// }

// export const fetchAllCollection = async () => {
//     return await axios.get(`${blogUrl}/collection`).then((res) => {
//         const jsonTables = HtmlTableToJson.parse(res.data);
//         const secondElement = jsonTables?.results[0].filter((item) => item.collection !== "Others");
//         secondElement.push({ "collection": "Others" });
//         console.log("secondElement", secondElement);
//         return secondElement
//     }).catch((e) => {
//         console.log("e is", e);
//         return e    
//     })
// }


import axios from "axios";
import HtmlTableToJson from "html-table-to-json";
import { blogUrl } from "../../utils/blog";

// Utility function to parse HTML tables
const parseHtmlTable = (htmlData) => {
  const jsonTables = HtmlTableToJson.parse(htmlData);
  return jsonTables?.results[0];
};

export const fetchAllBlog = async () => {
  try {
    const res = await axios.get(`${blogUrl}/blogs`);
    console.log(res, "///////////////////////////////////");
    const tableData = parseHtmlTable(res.data);
    return tableData ? tableData.reverse() : [];
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw error; // Throw the error for proper error handling
  }
};

export const fetchBlogBySlug = async (slug) => {
  try {
    const res = await axios.get(`${blogUrl}/blogs/octopus/${slug}`);
    const tableData = parseHtmlTable(res.data);
    return tableData || null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw error;
  }
};

export const fetchAllCollection = async () => {
  try {
    const res = await axios.get(`${blogUrl}/collection`);
    const tableData = parseHtmlTable(res.data);
    const secondElement = tableData?.filter((item) => item.collection !== "Others");
    secondElement.push({ collection: "Others" });
    console.log("secondElement", secondElement);
    return secondElement || [];
  } catch (error) {
    console.error("Error fetching all collections:", error);
    throw error;
  }
};
