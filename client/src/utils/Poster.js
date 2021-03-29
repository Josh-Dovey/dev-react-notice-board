import axios from "axios";

const Poster = async (url, data) => {
  try {
    const doc = await axios.post(url, data).then((res) => res.data);
    return doc;
  } catch (err) {
    const errData = err.response.data;
    return errData;
  }
};

export default Poster;
