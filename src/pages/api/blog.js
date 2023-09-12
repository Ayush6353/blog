import axios from "axios";
import HtmlTableToJson from "html-table-to-json";
import { blogUrl } from "../../utils/blog";

const parseHtmlTable = (htmlData) => {
  try {
    const jsonTables = HtmlTableToJson.parse(htmlData);
    return jsonTables?.results[0];
  } catch (error) {
    console.error("Error parsing HTML table:", error);
    throw error;
  }
};

export const fetchAllBlog = async () => {
  try {
    const res = await axios.get(`${blogUrl}/blogs`);
    const tableData = parseHtmlTable(res.data);
    return tableData ? tableData.reverse() : [];
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw error;
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
    
    return secondElement || [];
  } catch (error) {
    console.error("Error fetching all collections:", error);
    throw error;
  }
};
